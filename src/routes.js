import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import TodosContainer from './containers/todos_container';
import LoginContainer from './containers/login_container';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={TodosContainer} />
    <Route path="/lists/:tag" component={TodosContainer} />
    <Route path='/login' component={LoginContainer} />
	</Route>
);
