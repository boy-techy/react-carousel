const BASE_URL = 'https://node-sample-api.herokuapp.com/api';

const API_CAROUSEL = `${BASE_URL}/home`;
const API_PRODUCTS = (pageNo = 1) => `${BASE_URL}/products?page=${pageNo}`;
const API_PRODUCT_DETAIL = id => `${BASE_URL}/products/${id}`;

export {
    API_CAROUSEL,
    API_PRODUCTS,
    API_PRODUCT_DETAIL
}
