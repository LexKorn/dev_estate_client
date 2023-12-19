import axios from 'axios';

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export const fetchFlats = async () => {
    const {data} = await $host.get('api/flats');
    return data;
};

export const fetchOneFlat = async (id: number) => {
    const {data} = await $host.get('api/flats/' + id);
    return data;
};