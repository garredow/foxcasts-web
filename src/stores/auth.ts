import { writable } from 'svelte/store';

type Auth0User = {
  sub: string;
  token: string;
};

export const isAuthenticated = writable(false);
export const user = writable<Auth0User>();
export const token = writable<string | undefined>();
