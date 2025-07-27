import { Link, Outlet, redirect } from '@tanstack/react-router';
import { Button } from '~/components/ui/button';

export const Route = createFileRoute({
  component: DashboardLayout,
  beforeLoad: ({ context }) => {
    if (!context.user) {
      throw redirect({ to: '/login' });
    }
  },
});

function DashboardLayout() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10 p-2">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-bold text-3xl sm:text-4xl">Dashboard Layout</h1>
        <div className="flex items-center gap-2 max-sm:flex-col">
          This is a protected layout:
          <pre className="rounded-md border bg-card p-1 text-card-foreground">
            routes/dashboard/route.tsx
          </pre>
        </div>

        <Button asChild className="w-fit" size="lg" type="button">
          <Link to="/">Back to index</Link>
        </Button>
      </div>

      <Outlet />
    </div>
  );
}
