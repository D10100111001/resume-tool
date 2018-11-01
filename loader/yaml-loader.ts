import * as yaml from 'js-yaml';
import { ResumeConfig } from '../models/resume-config';
import { FileLoader } from './file-loader';

export class YamlLoader {

	private _fileLoader = new FileLoader(this._filePath);

	constructor(private _filePath: string) {
	 }

	async load() {
		const fileContent = await this._fileLoader.load();
		return yaml.load(fileContent) as ResumeConfig;
	}
}