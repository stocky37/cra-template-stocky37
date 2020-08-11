import React from 'react';
import {useParams} from 'react-router';

const Hello = () => {
	const {name} = useParams();
	return <p>Hello, {name || 'World'}!</p>;
};

export default Hello;
