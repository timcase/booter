import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import configureStore from './store/configure_store';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import jwtDecode from 'jwt-decode';
import {sendCreateLoginUserIsSuccess} from './actions/authentication';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

let jwt = localStorage.getItem('jwt');
if (jwt !== null) {
    store.dispatch(sendCreateLoginUserIsSuccess(jwt, jwtDecode(jwt)));
}

ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
          document.getElementById("root")
);

