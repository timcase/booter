import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import TodosContainer from './containers/todos_container';
import Login from './components/login';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={TodosContainer} />
    <Route path="/lists/:tag" component={TodosContainer} />
    <Route path='/login' component={Login} />
	</Route>
);
