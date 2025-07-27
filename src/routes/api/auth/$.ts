import { reactStartHandler } from '~/lib/auth/server-utils';

export const ServerRoute = createServerFileRoute().methods({
  GET: ({ request }) => reactStartHandler(request),
  POST: ({ request }) => reactStartHandler(request),
});
