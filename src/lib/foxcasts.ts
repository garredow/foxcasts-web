import type { Auth0Client } from '@auth0/auth0-spa-js';
import { FoxcastsLib } from 'foxcasts-lib';
import { createAuthClient } from './authClient';
import { config } from './config';

let accessToken: string;
let authClient: Auth0Client;

export async function getFoxcasts() {
  authClient = authClient || (await createAuthClient());
  accessToken = accessToken || (await authClient.getTokenSilently());

  const foxcasts = new FoxcastsLib({
    apiUrl: config.apiUrl,
    apiToken: accessToken,
  });

  return foxcasts;
}
