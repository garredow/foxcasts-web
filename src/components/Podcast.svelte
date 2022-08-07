<script lang="ts">
  import { mutationStore } from '@urql/svelte';
  import MdAdd from 'svelte-icons/md/MdAdd.svelte';
  import MdClear from 'svelte-icons/md/MdClear.svelte';
  import { graphClient } from '../lib/graphClient';
  import type { Podcast } from '../models';
  import { Subscribe } from '../mutations/Subscribe';
  import { Unsubscribe } from '../mutations/Unsubscribe';
  import IconButton from './IconButton.svelte';

  export let podcast: Podcast;
  export let onChange: () => void = null;

  async function subscribe() {
    mutationStore({
      client: graphClient.client,
      query: Subscribe,
      variables: { podcastId: podcast.id },
    }).subscribe((res) => {
      if (!res.fetching && !res.error) onChange?.();
    });
  }

  async function unsubscribe() {
    mutationStore({
      client: graphClient.client,
      query: Unsubscribe,
      variables: { podcastId: podcast.id },
    }).subscribe((res) => {
      if (!res.fetching && !res.error) onChange?.();
    });
  }
</script>

<div class="root">
  <img class="artwork" src={podcast.artwork?.url} alt="" />
  <div class="info">
    <div class="title">{podcast.title}</div>
    <div class="author">{podcast.author}</div>
  </div>
  <div class="actions">
    {#if podcast.is_subscribed}
      <IconButton icon={MdClear} onClick={unsubscribe} />
    {/if}
    {#if !podcast.is_subscribed}
      <IconButton icon={MdAdd} onClick={subscribe} />
    {/if}
  </div>
</div>

<style>
  .root {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }

  .artwork {
    aspect-ratio: 1/1;
    height: 48px;
    width: 48px;
    border-radius: 5px;
    margin-right: 10px;
  }

  .info {
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
  }

  .title,
  .author {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .author {
    color: rgba(0, 0, 0, 0.5);
  }
</style>
