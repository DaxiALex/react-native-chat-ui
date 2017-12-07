import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './reducers/index';

const middlewares = [thunk];
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
