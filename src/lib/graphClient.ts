import { Client, createClient } from '@urql/svelte';
import { authClient } from './authClient';

class GraphClient {
  public client: Client;

  constructor() {
    this.client = createClient({
      url: 'https://api.podcloud.social/graphql',
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
  const token = await authClient.getTokenSilently();
  graphClient.setToken(token);

  return graphClient;
}
