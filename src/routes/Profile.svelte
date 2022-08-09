<script lang="ts">
  import { onMount } from 'svelte';
  import type { Writable } from 'svelte/store';
  import Button from '../components/Button.svelte';
  import InputRow from '../components/InputRow.svelte';
  import Loading from '../components/Loading.svelte';
  import TextAreaRow from '../components/TextAreaRow.svelte';
  import { query, type Query } from '../lib/query';
  import { GetProfile, type GetProfileResponse } from '../queries/GetProfile';
  import { user } from '../stores/auth';

  let result: Writable<Query<GetProfileResponse>>;

  onMount(() => {
    result = query(GetProfile);
  });

  $: console.log('result', $result);
</script>

{#if !result || $result.fetching}
  <Loading />
{:else if $result.error}
  <p>Oh no... {$result.error.message}</p>
{:else}
  <section>
    <div class="title">Profile</div>
    <InputRow label="First Name" value={$result.data.user.first_name} />
    <InputRow label="Last Name" value={$result.data.user.last_name} />
    <InputRow label="Email" value={$result.data.user.email} disabled />
    <InputRow
      label="Created"
      value={new Date($result.data.user.created_at).toLocaleString()}
      disabled
    />
    <InputRow
      label="Updated"
      value={new Date($result.data.user.updated_at).toLocaleString()}
      disabled
    />
    <div class="actions">
      <Button title="Save" onClick={() => console.log('save')} />
    </div>
  </section>
  <section>
    <div class="title">Developer</div>
    <InputRow label="User ID" value={$user?.sub} />
    <TextAreaRow label="API Token" value={$user?.token} />
  </section>
{/if}

<style>
  section {
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: 20px;
    padding: 10px 15px 10px 15px;
  }

  section .title {
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
    text-align: center;
  }

  section .actions {
    display: flex;
    justify-content: center;
  }
</style>
