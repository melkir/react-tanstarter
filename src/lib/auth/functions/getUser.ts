import { createServerFn } from '@tanstack/react-start';
import { getCookie, getWebRequest } from '@tanstack/react-start/server';
import { fetchSession, getCookieName } from '~/lib/auth/server-utils';

export const getUser = createServerFn({ method: 'GET' }).handler(async () => {
  const sessionCookieName = await getCookieName();
  const token = getCookie(sessionCookieName);
  const request = getWebRequest();
  const { session } = await fetchSession(request);
  return { user: session?.user || null, token };
});
