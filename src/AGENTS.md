# React Hydration + Suspense

## Core error

Error: A component suspended while responding to synchronous input. Wrap updates that suspend with startTransition.

## Key rule

During hydration, any synchronous state change breaks Suspense and shows fallbacks. Prevent by wrapping updates with startTransition.

## 90% fix

* `startTransition(() => setState(...))`
* Async:
  `startTransition(async () => { await x(); startTransition(() => setState(...)) })`
* External stores: `useSyncExternalStore` always triggers fallbacks; no real workaround.

## Behavior matrix (compressed)

* useState/useReducer new value: triggers; React Compiler prevents
* Same value: never triggers
* startTransition (direct import, sync): prevents
* useTransition (hook, sync): triggers during hydration
* startTransition after await: triggers (lost context)
* startTransition double-wrapped with direct import: prevents
* startTransition double-wrapped with useTransition: still triggers
* startTransition + rendering isPending: triggers
* useDeferredValue: triggers; with React.memo: prevents
* useSyncExternalStore: always triggers; React Compiler prevents

## What triggers fallbacks (even with full SSR HTML)

* Plain setState/dispatch during hydration
* External store mutations
* useTransition-wrapped updates
* Async updates after await unless re-wrapped with direct-import startTransition
* Rendering isPending
* useDeferredValue (unless memoized)

## What doesn’t

* No actual state change (same value)
* startTransition (direct import) for sync updates
* Correct double-wrap pattern for async (direct import)
* Deferred value when the child is memoized

## Why

* External stores can’t be transitioned
* Transition context is lost across await
* Rendering isPending causes extra non-transitioned renders

## React Compiler

Automatic memoization prevents observed hydration fallbacks; makes most manual startTransition wrapping unnecessary (per tests).

## Testing method (E2E)

SSR via renderToPipeableStream → open prebuilt HTML → wait for hydration → click → assert boundary content stays visible. Real browsers, Playwright, lazy components with delays.

## Practical takeaways

* Wrap interactive hydration-time updates with startTransition (direct import)
* For async, re-enter a new startTransition after await
* Don’t rely on useTransition for hydration; avoid rendering isPending during hydration
* External stores will flash; consider alternatives or React Compiler
* Same-value updates are skipped

# TanStack DB

* Reactive client store extending TanStack Query with collections, live queries, optimistic mutations; uni-directional data flow; live queries via d2ts (incremental, sub-ms).

Core loop

* Define collections → read via live queries → mutate optimistically; local overlay until backend confirms; auto rollback on error.

Collections

* QueryCollection: fetch via TanStack Query.
* ElectricCollection: sync Postgres subsets via ElectricSQL Shapes.
* TrailBaseCollection: sync TrailBase Record APIs; parse/serialize hooks.
* RxDBCollection: bridge RxDB (replication, offline).
* LocalStorageCollection: small local state, cross-tab sync.
* LocalOnlyCollection: in-memory UI/session state.
* Derived collections: live queries return collections.
* Schemas: Standard Schema (Zod, Effect) for validation and types; if schema provided, no generic type param.

Live queries

* Reactive, incremental, support joins; results are collections.
* Framework hooks: React useLiveQuery; Angular injectLiveQuery.

Query builder essentials

* from one source; where with eq, gt, gte, lt, lte, like, ilike, inArray, and, or, not.
* select projections, renames, computed fields (upper, lower, length, concat, coalesce, add).
* joins: left default; right, inner, full; equality conditions only.
* subqueries: in from and join; deduped when reused.
* groupBy + aggregates: count, sum, avg, min, max; having.
* distinct requires select.
* orderBy asc|desc; limit; offset.
* Composability: reusable Query, cached intermediates.
* Functional variants fn.select, fn.where, fn.having for complex JS logic; less optimizable.

Mutations and transactions

* insert, update, delete; onInsert/onUpdate/onDelete handlers persist writes.
* mutationFn must await server write + sync/refetch before returning (drops optimistic state safely).
* createOptimisticAction for custom actions; createTransaction for manual batching.
* Control optimistic: optimistic true (default) vs false for critical/validated/batch operations.

Transaction lifecycle

* pending → persisting → completed → failed.

Mutation merging (same item within a transaction)

* insert+update → insert (merge)
* insert+delete → removed
* update+delete → delete
* update+update → update (union changes)
* same type → latest wins

Error handling

* Named errors: SchemaValidationError (type, issues), CollectionInErrorStateError, DuplicateKeyError, MissingHandlerError, TransactionError, etc.
* QueryCollection error utils: lastError(), isError(), errorCount(), clearError().
* Status flags: idle, loading, initialCommit, ready, error, cleaned-up.
* Common pitfalls: operations blocked in error state until cleanup; direct mutations need handlers; schema validation must be sync; duplicate keys throw.
* Sync errors: collections still marked ready; cached data shown; retries supported; cleanup errors isolated.
* Recovery patterns: cleanup and restart; graceful degradation; rollback cascading on conflicts; invalid state guards.
* Best practices: use instanceof; check flags; handle isPersisted.promise; import only needed error types.

Create custom collection options (collection options creator)

* When: custom sync engine/protocol or non-Query needs.
* Must provide: config interface; sync(begin, write, commit, markReady) with listener-before-fetch buffering and dedupe; cleanup; parse/serialize for type conversion; rowUpdateMode partial|full.
* Mutation handlers

  * Pattern A: user-provided handlers (Query, Electric).
  * Pattern B: built-in handlers calling provider APIs (TrailBase, RxDB); chunk for batch limits.
* Managing optimistic state until sync

  * Provider wait methods (eg waitForPendingWrites)
  * Transaction id tracking (awaitTxId)
  * ID-based tracking (awaitIds)
  * Version/timestamp waits
  * Full refetch strategy (simplest)
* Testing: unit, integration, error, performance.
* Practices: always markReady; buffer events; batch writes; clean up resources.

Query Collection specifics

* Install: @tanstack/query-db-collection, @tanstack/query-core, @tanstack/db.
* Required: queryKey, queryFn, queryClient, getKey.
* Options: enabled, refetchInterval, retry, retryDelay, staleTime, meta; id, schema, sync, startSync.
* Handlers: onInsert/onUpdate/onDelete; return { refetch: false } to skip auto-refetch.
* Utils: refetch().

Direct writes (to synced store; no optimistic layer; no auto-refetch)

* writeInsert, writeUpdate, writeDelete, writeUpsert.
* writeBatch(cb) for atomic multi-ops.
* Use cases: socket/SSE deltas, large datasets, server-computed fields, pagination.

Important behaviors

* queryFn result is complete state; missing items are deleted; present items upserted.
* Empty array deletes all.
* For incremental fetches: merge with cached state before returning; handle deletions if provided.
* Direct writes update cache immediately; query sync still authoritative unless refetch suppressed/tuned.

# ClientOnly

* Client-only render to avoid SSR hydration issues
* Props: fallback (loading UI), children (post-hydration UI)

# Environment functions

* createIsomorphicFn(): env-specific implementation (server/client)
* serverOnly(fn), clientOnly(fn): hard-gate execution by env
* Tree-shaken per bundle (client stripped from server, and vice versa)

# TanStack Start basics

* Depends: @tanstack/react-router, Vite
* Router: getRouter()
* routeTree.gen.ts auto-generated on first dev run
* Optional entries: server handler via @tanstack/react-start/server; client hydrate via StartClient
* Root route head: utf-8, viewport, title; component wraps Outlet in RootDocument
* Routes: createFileRoute() ⇒ code-split + lazy-load; loader runs server/client
* Navigation: Link (typed), useNavigate (imperative), useRouter (instance)

# Server functions (RPCs)

* createServerFn({ method }) + zod .inputValidator + .handler(ctx)
* After mutations: router.invalidate(); queryClient.invalidateQueries(\['entity', id])

# Typed Links

* Link to="/posts/\$postId" with params; activeProps for styling

- TanStack Start RC1 regressions we must patch locally:
  - Always restore unrestricted env loading in `vite.config.ts` (`loadEnv(..., '', )`) until the upstream regression is fixed.
  - Keep the custom log middleware disabled (or guard `clientTime`/`serverTime` carefully) because RC1 sometimes executes the server middleware before the client context is set, leading to blank screens.
