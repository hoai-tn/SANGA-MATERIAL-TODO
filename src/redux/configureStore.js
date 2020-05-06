import {
    createStore,
    compose,
    applyMiddleware
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../reducers';
import thunk from 'redux-thunk';

const configureStore = () => {
    const middlewares = [];
    // const enhancers = [applyMiddleware(...middlewares)]
    const store = createStore(
        rootReducers, 
        composeWithDevTools(applyMiddleware(thunk)));
    return store;
}

export default configureStore;