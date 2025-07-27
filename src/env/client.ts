import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  clientPrefix: 'VITE_',
  client: {
    VITE_CONVEX_URL: z.url().endsWith('.cloud'),
    VITE_CONVEX_SITE_URL: z.url().endsWith('.site'),
  },
  runtimeEnv: import.meta.env,
});
