import { createFileRoute } from '@tanstack/react-router';
import { json } from '@tanstack/react-start';

export const Route = createFileRoute('/api/test')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        return json({
          message: 'Hello from GET!',
          method: 'GET',
          timestamp: new Date().toISOString(),
          url: request.url,
        });
      },
      POST: async ({ request }) => {
        const body = await request.json().catch(() => ({}));

        return json(
          {
            message: 'Hello from POST!',
            method: 'POST',
            received: body,
            timestamp: new Date().toISOString(),
          },
          {
            status: 201,
          }
        );
      },
    },
  },
});
