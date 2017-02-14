import React from 'react';
import { Route, IndexRoute } from 'react-router';
import TodosContainer from './containers/todos_container';
import LoginContainer from './containers/login_container';
import AppContainer from './containers/app_container';
import SignupContainer from './containers/signup_container';

export default (
	<Route path="/" component={AppContainer}>
		<IndexRoute component={TodosContainer} />
    <Route path="/lists/:tag" component={TodosContainer} />
    <Route path='/login' component={LoginContainer} />
    <Route path='/signup' component={SignupContainer} />
	</Route>
);
