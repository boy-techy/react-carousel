import { applyMiddleware, compose, createStore as createReduxStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const createStore = (initialState = {}) => {
    
    const middleware = [thunk];
    
    let composeEnhancers = compose;
    
    // if (__DEV__) {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
    // }
    
    return createReduxStore(
      rootReducer(),
      initialState,
      composeEnhancers(
        applyMiddleware(...middleware),
      ),
    );
    
};

export default createStore;
