import { productActions } from "./store/actions";
import store from "./store/createStore";
import ProductDetail from "./components/view/productDetail";
import HomePage from "./components/view/homePage/HomePage";
import { PageNotFound } from "./components/common";

export const routes = [
    {
        path: '/pdp/:id',
        component: ProductDetail,
        loadData: () => store.dispatch(productActions.fetchProductDetail(1))
    },
    {
        path: '/',
        component: HomePage,
        loadData: () => {
            return Promise.all([
                store.dispatch(productActions.fetchCarouselMeta()),
                store.dispatch(productActions.fetchProducts(1))
            ]);
        },
        exact: true
    },
    {
        path: '*',
        component: PageNotFound,
        loadData: () => Promise.resolve(true)
    }
];
