import React from 'react';

if (process.env.NODE_ENV === 'development') {
	// this is required to use why-did-you-render
	// eslint-disable-next-line import/no-extraneous-dependencies,global-require
	const whyDidYouRender = require('@welldone-software/why-did-you-render');
	whyDidYouRender(React, {
		trackAllPureComponents: true,
	});
}
