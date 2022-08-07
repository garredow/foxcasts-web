<script lang="ts">
  import { queryStore } from '@urql/svelte';
  import { onMount } from 'svelte';
  import { navigate } from 'svelte-routing';
  import Button from '../components/Button.svelte';
  import Card from '../components/Card.svelte';
  import Loading from '../components/Loading.svelte';
  import Podcast from '../components/Podcast.svelte';
  import { getClient } from '../lib/graphClient';
  import { GetLibrary } from '../queries/GetLibrary';

  let library;
  async function getPodcasts() {
    const graphClient = await getClient();
    library = queryStore({
      client: graphClient.client,
      query: GetLibrary,
    });
  }

  onMount(() => {
    getPodcasts();
  });

  $: console.log('library', $library);
</script>

{#if !library || $library.fetching}
  <Loading />
{:else if $library.error}
  <p>Oh no... {$library.error.message}</p>
{:else}
  <Card title="Podcasts">
    {#each $library.data.subscriptions as sub}
      <Podcast podcast={sub} onChange={() => getPodcasts()} />
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
