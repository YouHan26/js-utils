export default function toCamel(s) {
	return s.replace(/([-_][a-z])/ig, function ($1) {
		return $1.toUpperCase()
			.replace('-', '')
			.replace('_', '');
	});
};