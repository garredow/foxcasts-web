import type { Artwork } from './Artwork';

export type Podcast = {
  id: number;
  itunes_id?: number;
  title: string;
  author: string;
  description?: string;
  artwork?: Artwork;
  feed_url: string;
  categories?: number[];
  last_fetched_episodes: string;
  created_at: string;
  updated_at: string;
};
