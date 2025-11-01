import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';

// Simple in-memory store for demo (in production, use a database)
const todos: Array<{ id: string; text: string; completed: boolean }> = [];

const todoSchema = z.object({
  text: z.string().min(1, 'Todo text is required'),
});

export const getTodos = createServerFn({ method: 'GET' }).handler(async () => {
  return todos;
});

export const createTodo = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => {
    return todoSchema.parse(data);
  })
  .handler(async ({ data }) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: data.text,
      completed: false,
    };
    todos.push(newTodo);
    return newTodo;
  });

export const toggleTodo = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => {
    return z.object({ id: z.string() }).parse(data);
  })
  .handler(async ({ data }) => {
    const todo = todos.find((t) => t.id === data.id);
    if (todo) {
      todo.completed = !todo.completed;
      return todo;
    }
    throw new Error('Todo not found');
  });

export const deleteTodo = createServerFn({ method: 'POST' })
  .inputValidator((data: unknown) => {
    return z.object({ id: z.string() }).parse(data);
  })
  .handler(async ({ data }) => {
    const index = todos.findIndex((t) => t.id === data.id);
    if (index !== -1) {
      todos.splice(index, 1);
      return { success: true };
    }
    throw new Error('Todo not found');
  });
