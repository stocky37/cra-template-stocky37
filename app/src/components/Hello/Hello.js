import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';

const Hello = () => {
	const {nameId} = useParams();
	const [name, setName] = useState(undefined);

	useEffect(() => {
		fetch(`http://localhost:8080/names/${nameId}`)
			.then((res) => res.json())
			.then((json) => {
				setName(json.name);
			});
	}, [nameId]);

	return <p>Hello, {name || nameId}!</p>;
};

Hello.whyDidYouRender = true;

export default Hello;
