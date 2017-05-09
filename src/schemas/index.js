import { schema } from 'normalizr';

export const todo = new schema.Entity('todos');

export const department = new schema.Entity('departments', {
  todos: [ todo ]
});


export const departmentList = new schema.Array(department);
export const todoList = new schema.Array(todo);

