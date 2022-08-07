import { Client, createClient } from '@urql/svelte';
import { createAuthClient } from './authClient';

class GraphClient {
  public client: Client;

  constructor() {
    this.client = createClient({
      url: 'https://api2.foxcasts.com/graphql',
      requestPolicy: 'network-only',
    });
  }

  setToken(token: string) {
    this.client.fetchOptions = () => {
      return {
        headers: { authorization: token ? `Bearer ${token}` : '' },
      };
    };
  }
}

export const graphClient = new GraphClient();

export async function getClient() {
  const authClient = await createAuthClient();
  const token = await authClient.getTokenSilently();
  graphClient.setToken(token);

  return graphClient;
}
