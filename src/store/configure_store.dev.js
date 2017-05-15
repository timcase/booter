import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import deepCopy from './redux-deep-copy';
import freeze from 'redux-freeze';

// const middleware = [routerMiddleware, thunk];

export default function configureStore() {
    const store = createStore(reducers, composeWithDevTools(
        applyMiddleware(thunk, routerMiddleware(browserHistory), deepCopy, freeze)
    ));

    return store;
}
