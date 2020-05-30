import {
   createStore,
   applyMiddleware
} from 'redux';
import {
   composeWithDevTools
} from 'redux-devtools-extension';
import rootReducers from '../reducers';
import thunk from 'redux-thunk';

const configureStore = () => {
   const middleware = [thunk]
   const store = createStore(
      rootReducers,
      composeWithDevTools(applyMiddleware(...middleware)));
   return store;
}

export default configureStore;