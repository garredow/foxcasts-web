import createAuth0Client from '@auth0/auth0-spa-js';
import { config } from './config';

export async function createAuthClient() {
  const authClient = await createAuth0Client({
    domain: config.authDomain,
    client_id: config.authClientId,
    redirect_uri: config.authRedirectUri,
    scope: config.authScope,
    audience: config.authAudience,
  });

  return authClient;
}
