import createAuth0Client from '@auth0/auth0-spa-js';

export const authClient = await createAuth0Client({
  domain: 'foxcasts.us.auth0.com',
  client_id: '55YoJp810kRcRcavhU5RkzUuxRJs4gW9',
  redirect_uri: window.location.origin,
  scope: 'read:current_user update:current_user_metadata offline_access openid',
  audience: 'https://api.foxcasts.com',
});
