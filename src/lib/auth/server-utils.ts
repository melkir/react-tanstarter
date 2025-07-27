import { reactStartHelpers } from '@convex-dev/better-auth/react-start';
import { env } from '~/env/client';
import { createAuth } from '~/lib/auth';

export const helpers = reactStartHelpers(createAuth, {
  convexSiteUrl: env.VITE_CONVEX_SITE_URL,
});

export const { fetchSession, reactStartHandler, getCookieName } = helpers;
