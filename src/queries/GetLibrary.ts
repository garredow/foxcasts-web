import { gql } from '@urql/svelte';
import type { Podcast } from '../models';

type GetLibraryResponse = {
  subscriptions: Podcast[];
};

export const GetLibrary = gql<GetLibraryResponse>`
  query {
    subscriptions {
      id
      title
      author
      description
      is_subscribed
      artwork {
        url
      }
    }
  }
`;
