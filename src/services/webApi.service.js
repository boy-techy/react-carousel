import axios from 'axios';

/**
 * @param url: API Url
 * @param data: payload
 * @param options: header options
 * @returns {Promise<AxiosResponse<T>>}
 * @constructor
 */
const POST = (url, data = null, options) => {
    return axios.post(url, data, options);
};

/**
 * @param url: API Url
 * @param options: Header options
 * @returns {Promise<AxiosResponse<T>>}
 * @constructor
 */
const GET = (url, options) => {
    return axios.get(url, options);
};

/**
 * @param url: API Url
 * @param data: payload
 * @param options: header options
 * @returns {Promise<AxiosResponse<T>>}
 * @constructor
 */
const PUT = (url, data = null, options) => {
    return axios.put(url, data, options);
};

export {
    POST,
    GET,
    PUT
};
