import { gql } from '@urql/svelte';
import type { Podcast } from '../models';

type Response = {
  search: Podcast[];
};

type Variables = {
  query: string;
  count: number;
};

export const Search = gql<Response, Variables>`
  query ($query: String!, $count: Int!) {
    search(query: $query, count: $count) {
      id
      title
      author
      is_subscribed
      artwork {
        url
      }
    }
  }
`;
