import { queryOptions } from '@tanstack/react-query';
import { getTodos } from '~/server/function/todos';

export type Todo = { id: string; text: string; completed: boolean };

export const todosQueryOptions = () =>
  queryOptions({
    queryKey: ['todos'],
    queryFn: async ({ signal }) => {
      // Call server function directly - TanStack Start handles proxying
      // Server functions created with createServerFn can be called directly
      return await getTodos({ signal });
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
