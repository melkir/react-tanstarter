import { convexAdapter } from '@convex-dev/better-auth';
import { convex } from '@convex-dev/better-auth/plugins';
import { betterAuth } from 'better-auth';
import type { GenericCtx } from '../../../convex/_generated/server';
import { betterAuthComponent } from '../../../convex/auth';

export const createAuth = (ctx: GenericCtx) =>
  betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
    database: convexAdapter(ctx, betterAuthComponent),
    // https://www.better-auth.com/docs/concepts/users-accounts#account-linking
    account: {
      accountLinking: { enabled: true },
    },
    // https://www.better-auth.com/docs/concepts/oauth
    socialProviders: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      },
      google: {
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      },
    },
    // https://www.better-auth.com/docs/authentication/email-password
    emailAndPassword: {
      enabled: true,
    },
    // https://www.better-auth.com/docs/concepts/users-accounts#delete-user
    user: {
      deleteUser: { enabled: true },
    },
    plugins: [convex()],
  });
