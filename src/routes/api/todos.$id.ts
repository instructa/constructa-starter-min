import { createFileRoute } from '@tanstack/react-router';
import { json } from '@tanstack/react-start';
import { z } from 'zod';
import { getTodos, createTodo, toggleTodo, deleteTodo } from '~/server/function/todos';

// Dynamic route: handles /api/todos/:id
export const Route = createFileRoute('/api/todos/$id')({
  server: {
    handlers: {
      GET: async ({ params }) => {
        // Return single todo (GET /api/todos/:id)
        const todos = await getTodos();
        const todo = todos.find((t) => t.id === params.id);
        if (!todo) {
          return json({ error: 'Todo not found' }, { status: 404 });
        }
        return json(todo);
      },
      POST: async ({ request, params }) => {
        // Handle toggle/delete actions (POST /api/todos/:id)
        const body = await request.json();
        const action = z.enum(['toggle', 'delete']).parse(body.action);
        try {
          if (action === 'toggle') {
            const todo = await toggleTodo({ data: { id: params.id } });
            return json(todo);
          }

          if (action === 'delete') {
            const result = await deleteTodo({ data: { id: params.id } });
            return json(result);
          }

          return json({ error: 'Invalid action' }, { status: 400 });
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Operation failed';
          const status = message === 'Todo not found' ? 404 : 500;
          return json({ error: message }, { status });
        }
      },
    },
  },
});
