import { Client, createClient } from '@urql/svelte';

class GraphClient {
  public client: Client;

  constructor() {
    this.client = createClient({
      url: 'https://api.podcloud.social/graphql',
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
