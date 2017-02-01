import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import TodosContainer from './containers/todos_container';
// import TodoList from './components/todo_list';
// import TodoDetailContainer from './containers/TodoDetailContainer';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={TodosContainer} />
    <Route path="/lists/:tag" component={TodosContainer} />
	</Route>
);
