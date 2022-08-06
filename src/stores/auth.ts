import createAuth0Client from '@auth0/auth0-spa-js';
import { writable } from 'svelte/store';

type Auth0User = {
  sub: string;
  token: string;
};

export const isAuthenticated = writable(false);
export const user = writable<Auth0User>();
export const token = writable<string | undefined>();

const client = await createAuth0Client({
  domain: 'podcloud-dev.us.auth0.com',
  client_id: 'SlTeN48AGrnMQL2F2iQN34Qi3zRuacQs',
  redirect_uri: window.location.origin,
  scope: 'read:current_user update:current_user_metadata offline_access openid',
  audience: 'https://api.podcloud.social',
});
export const authClient = writable(client);

// async function createStore() {
//   const isAuthenticated = writable(false);
//   const user = writable();
//   const client = await createAuth0Client({
//     domain: 'podcloud-dev.us.auth0.com',
//     client_id: 'SlTeN48AGrnMQL2F2iQN34Qi3zRuacQs',
//     redirect_uri: window.location.origin,
//     scope: 'read:current_user update:current_user_metadata offline_access openid',
//     audience: 'https://api.podcloud.social',
//   });

//   return {
//     client,
//     isAuthenticated,
//     user,
//   };
// }

// export const auth = await createStore();
