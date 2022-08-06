import { gql } from '@urql/svelte';
import type { Podcast } from '../models';

type GetProfileResponse = {
  user: {
    id: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    avatar_url?: string;
    created_at: string;
    updated_at: string;
    subscriptions: Podcast[];
  };
};

export const GetProfile = gql<GetProfileResponse>`
  query {
    user {
      id
      first_name
      last_name
      email
      avatar_url
      created_at
      updated_at
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
