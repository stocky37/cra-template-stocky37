/* eslint-disable react-hooks/rules-of-hooks */
import {useQuery} from 'react-query';

const API_URL = 'http://localhost:8080';

const fetcher = (path) => fetch(`${API_URL}/${path}`).then((res) => res.json());

export const Names = Object.freeze({
	get: (nameId) => useQuery(`names/${nameId}`, fetcher),
});
