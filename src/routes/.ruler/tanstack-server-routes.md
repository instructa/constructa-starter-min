# Server Routes — TanStack Start

Server HTTP endpoints for requests, forms, auth. Location: ./src/routes. Export Route to create API route. ServerRoute and Route can coexist in same file.

Routing mirrors TanStack Router: dynamic $id, splat $, escaped [.], nested dirs/dotted filenames map to paths. One handler per resolved path (duplicates error). Examples: users.ts → /users; users/$id.ts → /users/$id; api/file/$.ts → /api/file/$; my-script[.]js.ts → /my-script.js.

Middleware: pathless layout routes add group middleware; break-out routes skip parents.

RC1 server entry signature: export default { fetch(req: Request): Promise<Response> { ... } }

Define handlers: use createFileRoute() from @tanstack/react-router with server: { handlers: { ... } }. Methods per HTTP verb, with optional middleware builder. createServerFileRoute removed in RC1; use createFileRoute with server property.

Handler receives { request, params, context }; return Response or Promise<Response>. Helpers from @tanstack/react-start allowed.

Bodies: request.json(), request.text(), request.formData() for POST/PUT/PATCH/DELETE.

JSON/status/headers: return JSON manually or via json(); set status via Response init or setResponseStatus(); set headers via Response init or setHeaders().

Params: /users/$id → params.id; /users/$id/posts/$postId → params.id + params.postId; /file/$ → params._splat.

Unique path rule: one file per resolved path; users.ts vs users.index.ts vs users/index.ts conflicts.

RC1 structure:
```typescript
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/example')({
  server: {
    handlers: {
      GET: ({ request }) => new Response('Hello'),
      POST: ({ request }) => new Response('Created', { status: 201 })
    }
  }
})
```
