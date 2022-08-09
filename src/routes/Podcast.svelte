<script lang="ts">
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';

  import type { Writable } from 'svelte/store';
  import Card from '../components/Card.svelte';
  import Loading from '../components/Loading.svelte';
  import { query, type Query } from '../lib/query';
  import { GetPodcast, type GetPodcastResponse } from '../queries/GetPodcast';

  export let podcastId: number;

  let result: Writable<Query<GetPodcastResponse>>;

  function getData() {
    result = query(GetPodcast, { id: podcastId, episodeCount: 30 });
  }

  onMount(() => getData());
</script>

{#if !result}
  <div />
{:else if $result.fetching}
  <Loading />
{:else if $result.error}
  <p>Oh no... {$result.error.message}</p>
{:else}
  <img src={$result.data.podcast.artwork_url} alt="" class="artwork" />
  <div class="title">{$result.data.podcast.title}</div>
  <div class="author">{$result.data.podcast.author}</div>
  <p class="description">{$result.data.podcast.description}</p>
  <Card title="Episodes">
    {#each $result.data.podcast.episodes as episode}
      <div class="episode">
        <a
          href="/"
          on:click|preventDefault={() => navigate(`/podcast/${episode.id}`)}
          class="episode-title">{episode.title}</a
        >
      </div>
    {/each}
  </Card>
{/if}

<style>
  .artwork {
    width: 100%;
    aspect-ratio: 1/1;
    margin-bottom: 15px;
  }

  .title {
    font-size: 2.4rem;
    font-weight: 500;
    text-align: center;
    padding: 0px 20px;
  }
  .author {
    text-align: center;
    padding: 0px 20px;
  }

  .description {
    padding: 0px 20px;
  }

  .episode {
    margin-bottom: 15px;
  }
</style>
