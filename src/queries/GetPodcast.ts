import { gql } from '@urql/svelte';

export type GetPodcastResponse = {
  podcast: {
    id: number;
    artwork_url: string;
    author: string;
    description: string;
    is_subscribed: boolean;
    title: string;
    episodes: {
      id: number;
      title: string;
    }[];
  };
};

export type GetPodcastVariables = {
  id: number;
  episodeCount: number;
};

export const GetPodcast = gql<GetPodcastResponse, GetPodcastVariables>`
  query ($id: BigInt!, $episodeCount: Int!) {
    podcast(id: $id) {
      id
      artwork_url
      author
      description
      is_subscribed
      title
      episodes(count: $episodeCount) {
        id
        title
      }
    }
  }
`;
