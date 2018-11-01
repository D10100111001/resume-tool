import * as fs from 'fs-extra';
import * as path from 'path';

import { YamlLoader } from "./loader/yaml-loader";
import { ResumeProcessor } from "./processor/resume-processor";
import { TemplateInterpolator } from "./interpolator/template-interpolator";

const [,, filePath, templatePath] = process.argv;
const { "FILE_PATH": eFilePath, "TEMPLATE_PATH": eTemplatePath } = process.env;

async function run() {
	const resumeConfigFilePath = filePath || eFilePath || "configuration/sample.yaml";
	const resumeConfig = await new YamlLoader(resumeConfigFilePath).load();
	await new ResumeProcessor(resumeConfig).process();
	const templateFilePath = templatePath || eTemplatePath || "template/resume.md";
	const interpolatedTemplate = await new TemplateInterpolator(resumeConfig, templateFilePath).render();
	const outFileName = `${resumeConfig.name} - ${resumeConfig.jobs[0].title} Resume`;
	const outFilePath = `out/${outFileName}${path.extname(templateFilePath)}`;
	await fs.outputFile(outFilePath, interpolatedTemplate, 'utf-8');
	console.log(`Resume generated => ${outFilePath}`);
}

run();