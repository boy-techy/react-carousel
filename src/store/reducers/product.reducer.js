import {
    ASYNC_STATE,
    FETCH_CAROUSEL_META,
    FETCH_PRODUCT_DETAIL,
    FETCH_PRODUCTS
} from "../actions/action.constants";
import { typeString } from "../actions";

const initialState = {
    productDetail: null,
    productDetailLoader: false,
    productDetailError: null,
    products: {
        nextPage: 0,
        data: [],
        previousPage: 0
    },
    productsLoader: false,
    productsError: null,
    carouselMeta: null,
    carouselMetaLoader: false,
    carouselMetaError: null,
};


export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      //Product Detail
        case typeString(FETCH_PRODUCT_DETAIL, ASYNC_STATE.LOADING):
            return { ...state, productDetailLoader: true, productDetail: null };
        
        case FETCH_PRODUCT_DETAIL:
            return { ...state, productDetail: action.payload };
        
        case typeString(FETCH_PRODUCT_DETAIL, ASYNC_STATE.ERROR):
            return { ...state, productDetailError: action.error };
        
        case typeString(FETCH_PRODUCT_DETAIL, ASYNC_STATE.COMPLETE):
            return { ...state, productDetailLoader: false };
      
      //List of Products
        case typeString(FETCH_PRODUCTS, ASYNC_STATE.LOADING):
            return { ...state, productsLoader: true };
        
        case FETCH_PRODUCTS:
            return { ...state, products: action.payload };
        
        case typeString(FETCH_PRODUCTS, ASYNC_STATE.ERROR):
            return { ...state, productsError: action.error };
        
        case typeString(FETCH_PRODUCTS, ASYNC_STATE.COMPLETE):
            return { ...state, productsLoader: false };
      
      //carousel Information
        case typeString(FETCH_CAROUSEL_META, ASYNC_STATE.LOADING):
            return { ...state, carouselMetaLoader: true };
        
        case FETCH_CAROUSEL_META:
            return { ...state, carouselMeta: action.payload };
        
        case typeString(FETCH_CAROUSEL_META, ASYNC_STATE.ERROR):
            return { ...state, carouselMetaError: action.error };
        
        case typeString(FETCH_CAROUSEL_META, ASYNC_STATE.COMPLETE):
            return { ...state, carouselMetaLoader: false };
        
        
        default:
            return state;
    }
};

