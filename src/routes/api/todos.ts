import { createFileRoute } from '@tanstack/react-router';
import { json } from '@tanstack/react-start';
import { getTodos, createTodo } from '~/server/function/todos';

// Base route: handles /api/todos
export const Route = createFileRoute('/api/todos')({
  server: {
    handlers: {
      GET: async () => {
        const todos = await getTodos();
        return json(todos);
      },
      POST: async ({ request }) => {
        const body = await request.json();
        const newTodo = await createTodo({ data: body });
        return json(newTodo, { status: 201 });
      },
    },
  },
});
