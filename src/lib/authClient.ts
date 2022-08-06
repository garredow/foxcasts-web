import createAuth0Client from '@auth0/auth0-spa-js';

export const authClient = await createAuth0Client({
  domain: 'podcloud-dev.us.auth0.com',
  client_id: 'SlTeN48AGrnMQL2F2iQN34Qi3zRuacQs',
  redirect_uri: window.location.origin,
  scope: 'read:current_user update:current_user_metadata offline_access openid',
  audience: 'https://api.podcloud.social',
});
