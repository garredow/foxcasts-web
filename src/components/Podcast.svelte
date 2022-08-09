<script lang="ts">
  import MdAdd from 'svelte-icons/md/MdAdd.svelte';
  import MdClear from 'svelte-icons/md/MdClear.svelte';
  import { navigate } from 'svelte-routing';
  import { mutation } from '../lib/mutation';
  import type { Podcast } from '../models';
  import { Subscribe } from '../mutations/Subscribe';
  import { Unsubscribe } from '../mutations/Unsubscribe';
  import IconButton from './IconButton.svelte';

  export let podcast: Podcast;
  export let onChange: () => void = null;

  async function subscribe() {
    mutation(Subscribe, { podcastId: podcast.id }).subscribe((res) => {
      if (!res.fetching && !res.error) onChange?.();
    });
  }

  async function unsubscribe() {
    mutation(Unsubscribe, { podcastId: podcast.id }).subscribe((res) => {
      if (!res.fetching && !res.error) onChange?.();
    });
  }
</script>

<div class="root">
  <img class="artwork" src={podcast.artwork?.url} alt="" />
  <div class="info">
    <a href="/" on:click|preventDefault={() => navigate(`/podcast/${podcast.id}`)} class="title"
      >{podcast.title}</a
    >
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
