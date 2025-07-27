import { Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute({
  component: RouteComponent,
  beforeLoad: ({ context }) => {
    const REDIRECT_URL = '/dashboard';
    if (context.user) {
      throw redirect({ to: REDIRECT_URL });
    }
    return { redirectUrl: REDIRECT_URL };
  },
});

function RouteComponent() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </div>
  );
}
