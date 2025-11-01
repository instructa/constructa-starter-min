# TanStack Server Functions

Server-only logic callable anywhere (loaders, hooks, components, routes, client). File top level. No stable public URL. Access request context, headers/cookies, env secrets. Return primitives/JSON/Response, throw redirect/notFound. Framework-agnostic HTTP, no serial bottlenecks.

How it works: Server bundle executes. Client strips and proxies via fetch. RPC but isomorphic. Middleware supported.

Import: import { createServerFn } from '@tanstack/react-start'

Define: createServerFn({ method: 'GET'|'POST' }).handler(...). Callable from server/client/other server functions. RC1: response modes removed; return Response object for custom behavior.

Params: single param may be primitive, Array, Object, FormData, ReadableStream, Promise. Typical { data, signal? }.

Validation: .inputValidator enforces runtime input, drives types. Works with Zod. Transformed output → ctx.data. Identity validator for typed I/O without checks. Use .inputValidator() not deprecated .validator().

JSON/FormData: supports JSON. FormData requires encType="multipart/form-data".

Context (from @tanstack/react-start/server, h3): RC1 renames: getWebRequest→getRequest, getHeaders→getRequestHeaders, getHeader→getRequestHeader, setHeaders→setResponseHeaders, setHeader→setResponseHeader, parseCookies→getCookies. Available: getRequest, getRequestHeaders|getRequestHeader, setResponseHeader, setResponseStatus, getCookies, sessions, multipart, custom context.

Returns: primitives/JSON, redirect/notFound, or Response. Return Response directly for custom.

Errors: thrown errors → 500 JSON; catch as needed.

Cancellation: AbortSignal supported. Server notified on disconnect.

Integration: route lifecycles auto-handle redirect/notFound. Components use useServerFn. Elsewhere handle manually.

Redirects: use redirect from @tanstack/react-router with to|href, status, headers, path/search/hash/params. SSR: 302. Client auto-handles. Don't use sendRedirect.

Not Found: use notFound() for router 404 in lifecycles.

No-JS: execute via HTML form with serverFn.url. Pass args via inputs. Use encType for multipart. Cannot read return value; redirect or reload via loader.

Static functions: use staticFunctionMiddleware from @tanstack/start-static-server-functions. Must be final middleware. Caches build-time as static JSON (key: function ID+params hash). Used in prerender/hydration. Client fetches static JSON. Default cache: fs+fetch. Override: createServerFnStaticCache + setServerFnStaticCache.

Example:
```typescript
import { createServerFn } from '@tanstack/react-start'
import { staticFunctionMiddleware } from '@tanstack/start-static-server-functions'

const myServerFn = createServerFn({ method: 'GET' })
  .middleware([staticFunctionMiddleware])
  .handler(async () => 'Hello, world!')
```

Compilation: injects use server if missing. Client extracts to server bundle, proxies. Server runs as-is. Dead-code elimination.

Notes: inspired by tRPC. Always invoke normalizeInput(schema, preprocess?) inside handler. Don't rely on .validator(). When writing preprocess, unwrap wrappers ({ data: ... }, SuperJSON $values, stringified arrays) so validation runs on real payload.
