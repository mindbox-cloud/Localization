import * as React from "react";

declare global {
	interface Window {
		tr?: Function;
	}
}

/**
 * Method for translating react-components
 * @param label String which needs to translate
 * @param parameters If translating string include any template, You have to pass object with value,
 * read more https://help.localizejs.com/docs/library-api#section-localize-translate
 * @param spanClassName Use for passing additional classes
 */
export function tr(label: string, parameters: object = null, spanClassName: string = null): JSX.Element {
	return (
		<span
			className={spanClassName}
			dangerouslySetInnerHTML={{ __html: window.tr(label, parameters) }}>
		</span>);
}


/**
 * Method for translating only string
 * @param label String which needs to translate
 * @param parameters If translating string include any template, You have to pass object with value,
 * read more https://help.localizejs.com/docs/library-api#section-localize-translate
 */
export function trl(label: string, parameters: object = null): string {
	return label != null && label != ""
		? window.tr(label, parameters).replace(/(<\/?[\w\s='":]+\/?>)/g, "")
		: label;
}

/**
 * Method for translating only string or react-component
 * @param label String which needs to translate
 * @param parameters If translating string include any template, You have to pass object with value,
 * read more https://help.localizejs.com/docs/library-api#section-localize-translate
 */
export function tre(label: string | JSX.Element, parameters: object = null): string | JSX.Element {
	if (typeof label === "string")
		return trl(label, parameters);

	return label;
}