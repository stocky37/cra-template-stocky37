import {render} from '@testing-library/react';
import React from 'react';
import {MemoryRouter} from 'react-router';

import App from './App';

test('renders learn react link', () => {
	const {getByText} = render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);
	const linkElement = getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
