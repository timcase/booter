import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import configureStore from './store/configure_store';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './containers/app';
import Main from './components/main';

const store = configureStore();

// Save a reference to the root element for reuse
const rootEl = document.getElementById("root");

const history = syncHistoryWithStore(browserHistory, store);
// Create a reusable render method that we can call more than once
let render = () => {

    ReactDOM.render(
        <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={App}>
              <Route path="/todos" component={Main} />
            </Route>
          </Router>
        </Provider>,
        rootEl
    );
};

if(module.hot) {
    // Support hot reloading of components
    // and display an overlay for runtime errors
    const renderApp = render;
    const renderError = (error) => {
        const RedBox = require("redbox-react").default;
        ReactDOM.render(
            <RedBox error={error} />,
            rootEl,
        );
    };

    // In development, we wrap the rendering function to catch errors,
    // and if something breaks, log the error and render it to the screen
    render = () => {
        try {
            renderApp();
        }
        catch(error) {
            console.error(error);
            renderError(error);
        }
    };

    // Whenever the App component file or one of its dependencies
    // is changed, re-import the updated component and re-render it
  module.hot.accept("./containers/app", () => {
        setTimeout(render);
    });
}

render();
