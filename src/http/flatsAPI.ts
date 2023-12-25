import axios from 'axios';

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export const fetchFlats = async (page: number) => {
    const {data} = await $host.get(`api/flats?page=${page}`);
    return data;
};

export const fetchOneFlat = async (id: number) => {
    const {data} = await $host.get('api/flats/' + id);
    return data;
};

// REACT_APP_API_URL='http://localhost:5000/'
// REACT_APP_API_URL='https://estate.kornlex.ru/'