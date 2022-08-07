<script lang="ts">
  import { queryStore } from '@urql/svelte';
  import Card from '../components/Card.svelte';
  import InputRow from '../components/InputRow.svelte';
  import Loading from '../components/Loading.svelte';
  import Podcast from '../components/Podcast.svelte';
  import { getClient } from '../lib/graphClient';
  import { Search } from '../queries/Search';

  let query = '';
  let results;
  async function search() {
    const graphClient = await getClient();
    results = queryStore({
      client: graphClient.client,
      query: Search,
      variables: { query: query, count: 10 },
    });
  }
</script>

<Card title="Search">
  <form action="post" on:submit|preventDefault={search}>
    <InputRow label="Query" value={query} onChange={(val) => (query = val)} />
  </form>
</Card>
{#if !results}
  <div />
{:else if $results.fetching}
  <Loading />
{:else if $results.error}
  <p>Oh no... {$results.error.message}</p>
{:else}
  <Card title="Results">
    {#each $results.data.search as sub}
      <Podcast podcast={sub} onChange={() => search()} />
    {/each}
  </Card>
{/if}
