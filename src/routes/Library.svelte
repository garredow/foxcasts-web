<script lang="ts">
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import type { Writable } from 'svelte/store';
  import Button from '../components/Button.svelte';
  import Card from '../components/Card.svelte';
  import Loading from '../components/Loading.svelte';
  import Podcast from '../components/Podcast.svelte';
  import { query, type Query } from '../lib/query';
  import { GetLibrary, type GetLibraryResponse } from '../queries/GetLibrary';

  let library: Writable<Query<GetLibraryResponse>>;

  function getData() {
    library = query(GetLibrary);
  }

  onMount(() => getData());

  $: console.log('library', $library);
</script>

{#if !library || $library.fetching}
  <Loading />
{:else if $library.error}
  <p>Oh no... {$library.error.message}</p>
{:else}
  <Card title="Podcasts">
    {#each $library.data.subscriptions as sub}
      <Podcast podcast={sub} onChange={() => getData()} />
    {/each}
    <div class="actions">
      <Button title="Add" onClick={() => navigate('search')} />
    </div>
  </Card>
{/if}

<style>
  .actions {
    display: flex;
    justify-content: center;
  }
</style>
