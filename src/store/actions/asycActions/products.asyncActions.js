import { ASYNC_STATE, FETCH_PRODUCTS, FETCH_PRODUCT_DETAIL, FETCH_CAROUSEL_META } from "../action.constants";
import { typeString } from "../index";
import { GET } from "../../../services/webApi.service";
import { API_CAROUSEL, API_PRODUCT_DETAIL, API_PRODUCTS } from "../../../constants/apiUrls";


const fetchProducts = pageNo => async (dispatch, getState) => {
    dispatch({ type: typeString(FETCH_PRODUCTS, ASYNC_STATE.LOADING) });
    try {
        const res = await GET(API_PRODUCTS(pageNo));
        //merge previous store data and current one
        const storeProducts = getState().product.products ? getState().product.products.data : [];
        res.data.data = [...storeProducts , ...res.data.data];
        
        dispatch({ type: FETCH_PRODUCTS, payload: res.data });
        return res.data;
        
    } catch (e) {
        dispatch({ type: typeString(FETCH_PRODUCTS, ASYNC_STATE.ERROR), error: e });
        throw e;
        
    } finally {
        dispatch({ type: typeString(FETCH_PRODUCTS, ASYNC_STATE.COMPLETE) });
    }
};

const fetchProductDetail = productId => async dispatch => {
    dispatch({ type: typeString(FETCH_PRODUCT_DETAIL, ASYNC_STATE.LOADING) });
    try {
        const res = await GET(API_PRODUCT_DETAIL(productId));
        dispatch({ type: FETCH_PRODUCT_DETAIL, payload: res.data });
        return res.data;
        
    } catch (e) {
        dispatch({ type: typeString(FETCH_PRODUCT_DETAIL, ASYNC_STATE.ERROR), error: e });
        throw e;
        
    } finally {
        dispatch({ type: typeString(FETCH_PRODUCT_DETAIL, ASYNC_STATE.COMPLETE) });
    }
};

const fetchCarouselMeta = () => async dispatch => {
    dispatch({ type: typeString(FETCH_CAROUSEL_META, ASYNC_STATE.LOADING) });
    try {
        const res = await GET(API_CAROUSEL);
        dispatch({ type: FETCH_CAROUSEL_META, payload: res.data });
        return res.data;
        
    } catch (e) {
        dispatch({ type: typeString(FETCH_CAROUSEL_META, ASYNC_STATE.ERROR), error: e });
        throw e;
        
    } finally {
        dispatch({ type: typeString(FETCH_CAROUSEL_META, ASYNC_STATE.COMPLETE) });
    }
};

export {
    fetchProducts,
    fetchProductDetail,
    fetchCarouselMeta
}
