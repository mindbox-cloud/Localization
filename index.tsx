import * as React from 'react';

interface LocalizationParameters {
	[name: string]: string;
}

declare global {
	interface Window {
		tr?: (label: string, parameters?: LocalizationParameters) => string;
		trl?: (label: string, parameters?: LocalizationParameters) => string;
	}
}

/**
 * Method for translating react-components
 * @param label String which need to translate
 * @param parameters If translating string include any template, I have to pass object with value, read more https://help.localizejs.com/docs/library-api#section-localize-translate
 * @param spanClassName Use for passing additional classes
 */
export function tr(label: string, parameters?: LocalizationParameters, spanClassName?: string): JSX.Element {
	const result = !window.tr || !label
		? label
		: window.tr(label, parameters);

	return (
		<span
			className={spanClassName}
			dangerouslySetInnerHTML={{ __html: result }}>
		</span>);
}


/**
 * Method for translating only string
 * @param label String which need to translate
 * @param parameters If translating string include any template, I have to pass object with value, read more https://help.localizejs.com/docs/library-api#section-localize-translate
 */
export function trl(label: string, parameters: LocalizationParameters): string {
	if (!window.tr || !label) {
		return label;
	}

	return window.tr(label, parameters);
}