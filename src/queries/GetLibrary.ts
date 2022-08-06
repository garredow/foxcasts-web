import { gql } from '@urql/svelte';
import type { Podcast } from '../models';

type GetLibraryResponse = {
  user: {
    subscriptions: Podcast[];
  };
};

export const GetLibrary = gql<GetLibraryResponse>`
  query {
    user {
      subscriptions {
        id
        title
        author
        description
        artwork {
          url
        }
      }
    }
  }
`;
