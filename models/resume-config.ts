export interface JobEntry {
	company: string;
	title: string;
	startDate: Date;
	endDate?: Date;
	accomplishments: string[];
}

export interface EducationEntry {
	institution: string;
	graduationDate: Date;
	gpa: { value: number; scale: number; } | number;
	degree: { type: string; field: string } | string;
}

export interface CertificationEntry {
	name: string;
	acquisitionDate: Date;
	expirationDate?: Date;
}

export interface ResumeConfig {
	name: string;
	city: string;
	state: string;
	country?: string;
	phone?: string;
	email?: string;
	website?: string;
	jobs: JobEntry[];
	tech: string[];
	education: EducationEntry[];
	certifiactions?: CertificationEntry[];
}