<script lang="ts">
  import { queryStore } from '@urql/svelte';
  import { onMount } from 'svelte';
  import Button from '../components/Button.svelte';
  import Card from '../components/Card.svelte';
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
  <p>Loading...</p>
{:else if $library.error}
  <p>Oh no... {$library.error.message}</p>
{:else}
  <Card title="Podcasts">
    {#each $library.data.user.subscriptions as sub}
      <Podcast podcast={sub} onUnsubscribe={() => getPodcasts()} />
    {/each}
    <div class="actions">
      <Button title="Add" onClick={() => console.log('add')} />
    </div>
  </Card>
{/if}

<style>
  .actions {
    display: flex;
    justify-content: center;
  }
</style>
