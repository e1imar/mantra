import axios from 'axios';
// config
import {HOST_API_KEY, HOST_API_TOKEN} from '../config';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API_KEY });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

axiosInstance.interceptors.request.use(config => {
    config.headers['x-token'] = HOST_API_TOKEN
    return config
})


export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, { ...config });

    return res.data;
};

// ----------------------------------------------------------------------

export const endpoints = {
    product: {
        list: '/api/product_site',
        details: id => '/api/product_site/'+id,
        search: '/api/product/search',
    },
};