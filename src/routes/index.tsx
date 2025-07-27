import { useQueryClient } from '@tanstack/react-query';
import { Link, useRouter } from '@tanstack/react-router';
import { ThemeToggle } from '~/components/theme-toggle';
import { Button } from '~/components/ui/button';
import { authClient } from '~/lib/auth/client';

export const Route = createFileRoute({
  component: Home,
  loader: ({ context }) => ({ user: context.user }),
});

function Home() {
  const { user } = Route.useRouteContext();
  const router = useRouter();
  const queryClient = useQueryClient();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10 p-2">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-bold text-3xl sm:text-4xl">React TanStarter</h1>
        <div className="flex items-center gap-2 max-sm:flex-col">
          This is an unprotected page:
          <pre className="rounded-md border bg-card p-1 text-card-foreground">
            routes/index.tsx
          </pre>
        </div>
      </div>

      {user ? (
        <div className="flex flex-col items-center gap-2">
          <p>Welcome back, {user.name}!</p>
          <Button asChild className="mb-2 w-fit" size="lg" type="button">
            <Link to="/dashboard">Go to Dashboard</Link>
          </Button>
          <div className="text-center text-xs sm:text-sm">
            Session user:
            <pre className="max-w-screen overflow-x-auto px-2 text-start">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div>

          <Button
            className="w-fit"
            onClick={async () => {
              await authClient.signOut();
              await queryClient.invalidateQueries({ queryKey: ['user'] });
              await router.invalidate();
            }}
            size="lg"
            type="button"
            variant="destructive"
          >
            Sign out
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <p>You are not signed in.</p>
          <Button asChild className="w-fit" size="lg" type="button">
            <Link to="/login">Log in</Link>
          </Button>
        </div>
      )}

      <div className="flex flex-col items-center gap-2">
        <ThemeToggle />
        <a
          className="text-muted-foreground underline hover:text-foreground"
          href="https://github.com/melkir/react-tanstarter"
          rel="noreferrer noopener"
          target="_blank"
        >
          melkir/react-tanstarter-convex
        </a>
      </div>
    </div>
  );
}
