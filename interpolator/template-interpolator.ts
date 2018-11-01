import { ResumeConfig } from "../models/resume-config";

import * as handlebars from 'handlebars';
import { FileLoader } from "../loader/file-loader";
import { PhoneFormatHelper } from "../helpers/phone-formatter";
import { ListFormatHelper } from "../helpers/list-formatter";

handlebars.registerHelper("phone-format", new PhoneFormatHelper().process);
handlebars.registerHelper("list", new ListFormatHelper().process);

export class TemplateInterpolator {
	constructor(
		private _resumeConfig: ResumeConfig,
		private _templatePath: string) {}

	async render() {
		const template = await new FileLoader(this._templatePath).load();
		const templateFn = handlebars.compile(template);
		return templateFn(this._resumeConfig);
	}
}