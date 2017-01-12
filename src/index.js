import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import About from './components/about';
import Repos from './components/repos';
import Repo from './components/repo';
import Home from './components/repo';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/repos" component={Repos} >
        <Route path="/repos/:userName/:repoName" component={Repo} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
