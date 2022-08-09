<script lang="ts">
  import type { Writable } from 'svelte/store';
  import Card from '../components/Card.svelte';
  import InputRow from '../components/InputRow.svelte';
  import Loading from '../components/Loading.svelte';
  import Podcast from '../components/Podcast.svelte';
  import { query, type Query } from '../lib/query';
  import { Search, type SearchResponse } from '../queries/Search';

  let q = '';
  let results: Writable<Query<SearchResponse>>;

  async function search() {
    results = query(Search, { query: q, count: 10 });
  }
</script>

<Card title="Search">
  <form action="post" on:submit|preventDefault={search}>
    <InputRow label="Query" value={q} onChange={(val) => (q = val)} />
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
