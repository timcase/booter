import { schema } from 'normalizr';
import userSchema from './user';

export const todoSchema = new schema.Entity('todos', { user: userSchema });
export const todoListSchema = new schema.Array(todoSchema);

