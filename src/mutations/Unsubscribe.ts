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

export const Unsubscribe = gql<Response, Variables>`
  mutation Unsubscribe($podcastId: BigInt!) {
    unsubscribe(podcastId: $podcastId)
  }
`;
