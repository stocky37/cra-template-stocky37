import React from 'react';
import {useParams} from 'react-router-dom';
import {Names} from 'util/api';

const Hello = () => {
	const {nameId} = useParams();
	const {isLoading, data: name} = Names.get(nameId);
	return <p>Hello, {isLoading ? nameId : name.name}!</p>;
};

Hello.whyDidYouRender = true;

export default Hello;
