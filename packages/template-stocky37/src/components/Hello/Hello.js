import React from 'react';
import {useParams} from 'react-router-dom';
import {Names} from 'util/api';

const Hello = () => {
	const {nameId} = useParams();
	const {data: name} = Names.get(nameId);
	return <p>Hello, {name ? name.name : nameId}!</p>;
};

Hello.whyDidYouRender = true;

export default Hello;
