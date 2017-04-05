import { schema } from 'normalizr';
import { todoListSchema } from './todo';

export const departmentSchema = new schema.Entity('departments', { todos: todoListSchema });

export const departmentListSchema = new schema.Array(departmentSchema);
