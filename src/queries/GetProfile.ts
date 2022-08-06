import { gql } from '@urql/svelte';

type GetProfileResponse = {
  user: {
    id: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    avatar_url?: string;
    created_at: string;
    updated_at: string;
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
    }
  }
`;
