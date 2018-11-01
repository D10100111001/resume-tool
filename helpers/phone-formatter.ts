interface HandlebarsHelper {
	process: Handlebars.HelperDelegate;
}

const phoneRegex = /^(1|)?(\d{3})(\d{3})(\d{4})$/;

export class PhoneFormatHelper implements HandlebarsHelper {

	private static renderPhoneFormat(phoneNumber: string) {
		const cleaned = phoneNumber.replace(/\D/g, '');
		const match = cleaned.match(phoneRegex);
		if (match) {
			return [match[1] ? '+1 ' : '', 
							`(${match[2]}) `, 
							match[3], 
							'-', 
							match[4]]
							.join('');
		}
	}

	public process(phoneNumber: string, { fn, inverse }) {
		return phoneNumber ? 
			fn(PhoneFormatHelper.renderPhoneFormat(phoneNumber)) : 
			inverse(null);
	}
}