import { gql } from '@urql/svelte';
import type { Podcast } from '../models';

type Response = {
  user: {
    subscriptions: Podcast[];
  };
};

type Variables = {
  podcastId: number;
};

export const Subscribe = gql<Response, Variables>`
  mutation ($podcastId: BigInt!) {
    subscribe(podcastId: $podcastId)
  }
`;
