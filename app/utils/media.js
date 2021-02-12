import { css } from 'styled-components';

const breakpoints = {
	mobile: '320px',
	tablet: '992px',
	desktop: '1200px'
};

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});