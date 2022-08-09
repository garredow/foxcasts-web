import { gql } from '@urql/svelte';
import type { Podcast } from '../models';

export type SearchResponse = {
  search: Podcast[];
};

export type SearchVariables = {
  query: string;
  count: number;
};

export const Search = gql<SearchResponse, SearchVariables>`
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
