import axios from 'axios';

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export const fetchAllFlats = async () => {
    const {data} = await $host.get('api/flats?limit=200');
    return data;
};

export const fetchPageFlats = async (page: number) => {
    const {data} = await $host.get(`api/flats?limit=25&page=${page}`);
    return data;
};

export const fetchOneFlat = async (id: number) => {
    const {data} = await $host.get('api/flats/' + id);
    return data;
};

// REACT_APP_API_URL='http://localhost:5000/'
// REACT_APP_API_URL='https://estate.kornlex.ru/'