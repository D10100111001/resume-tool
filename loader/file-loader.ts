import * as fs from 'fs-extra';

export class FileLoader {
	constructor(private _filePath: string) {}

	load() {
		return fs.readFile(this._filePath, 'utf-8');		
	}
}