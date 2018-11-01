interface HandlebarsHelper {
	process: Handlebars.HelperDelegate;
}

export class ListFormatHelper implements HandlebarsHelper {

	public process(list: string[], { fn, inverse, hash: { separator = ', ' } }) {

		return list ? 
			fn(list.join(separator)) : 
			inverse(null);
	}
}