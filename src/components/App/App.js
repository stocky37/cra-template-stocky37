import './App.css';

import Hello from 'components/Hello';
import React from 'react';
import {Route, Routes} from 'react-router';

import logo from './logo.svg';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Routes>
					<Route path="/:nameId">
						<Hello />
					</Route>
				</Routes>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
