import { ResumeConfig, EducationEntry } from "../models/resume-config";

type Diff<T, U> = T extends U ? never : T;

type TypeProcessHandler = Record<string, (prop) => string>;

const PROP_PATH_DEFAULTS = {
	"jobs[]": { key: "endDate", value: () => "Present" }
}

const PROP_PATH_PROCESSOR = {
	"education[].gpa": (prop) => 
		ResumeProcessor.processObjectToString<EducationEntry["gpa"]>(prop, 
			(gpa) => `${gpa.value}/${gpa.scale}`),
	"education[].degree": (prop) => 
		ResumeProcessor.processObjectToString<EducationEntry["degree"]>(prop, 
			(degree) => `${degree.type} in ${degree.field}`)
}

const PROP_TYPE_PROCESSOR: TypeProcessHandler = {
	Date: (prop: Date) => 
		`${prop.toLocaleString("en-us", { month: "short" })} ${prop.getUTCFullYear()}`
};

export class ResumeProcessor {
	constructor(private _resumeConfig: ResumeConfig) { }

	process() {
		this.processAllEntries(this._resumeConfig);
	}

	processAllEntries<TObj>(obj: TObj, path: string = '') {
		if (!ResumeProcessor.isObj(obj)) return;
		Object.keys(obj).forEach(key => {
			const currentPath = `${path}${path ? '.' : ''}${key}`;
			const prop = obj[key];
			const propCtor = prop.constructor && prop.constructor.name;
			const typeHandlerFn = PROP_TYPE_PROCESSOR[propCtor];
			const pathHandlerFn = PROP_PATH_PROCESSOR[currentPath];
			const handlerFn = typeHandlerFn || pathHandlerFn;
			if (handlerFn) {
				obj[key] = handlerFn(prop);
			} else if (typeof prop === "object") {
				const isArray = Array.isArray(prop);
				const arr = isArray ? prop : [prop];
				arr.forEach(i => this.processAllEntries(i, `${currentPath}${isArray ? '[]' : ''}`));
			}
			const defaultHandlerObj = PROP_PATH_DEFAULTS[path];
			if (defaultHandlerObj && !(defaultHandlerObj.key in obj)) {
				obj[defaultHandlerObj.key] = defaultHandlerObj.value();
			}
		});
	}

	static processObjectToString<T>(value: any, resolver: (obj: Diff<T, number | string>) => string) {
		return ResumeProcessor.isObj(value) ? resolver(value) : String(value);
	}

	static isObj(value: any, isArray: boolean = false) {
		return typeof value === "object" && (isArray === Array.isArray(value));
	}
}