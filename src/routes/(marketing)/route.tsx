import { Outlet, createFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';
import { Header } from '~/components/Header';

export const Route = createFileRoute('/(marketing)')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
