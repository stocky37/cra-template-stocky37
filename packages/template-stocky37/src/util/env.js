const env = (key, defaultValue = undefined) => {
	if (window['env'] && window['env'].hasOwnProperty(key)) {
		return window['env'][key];
	}
	if (process.env.hasOwnProperty(key)) {
		return process.env[key];
	}
	return defaultValue;
};

export const API_URL = env('REACT_APP_API_URL', 'http://localhost:8080');
