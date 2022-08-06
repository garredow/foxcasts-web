<script lang="ts">
  import { queryStore } from '@urql/svelte';
  import { onMount } from 'svelte';
  import Button from '../components/Button.svelte';
  import InputRow from '../components/InputRow.svelte';
  import TextAreaRow from '../components/TextAreaRow.svelte';
  import { getClient } from '../lib/graphClient';
  import { GetProfile } from '../queries/GetProfile';
  import { user } from '../stores/auth';

  let profile;
  async function getProfile() {
    const graphClient = await getClient();
    profile = queryStore({
      client: graphClient.client,
      query: GetProfile,
    });
  }

  onMount(() => getProfile());

  $: console.log('profile', $profile?.data);
</script>

{#if !profile || $profile.fetching}
  <p>Loading...</p>
{:else if $profile.error}
  <p>Oh no... {$profile.error.message}</p>
{:else}
  <section>
    <div class="title">Profile</div>
    <InputRow label="First Name" value={$profile.data.user.first_name} />
    <InputRow label="Last Name" value={$profile.data.user.last_name} />
    <InputRow label="Email" value={$profile.data.user.email} disabled />
    <InputRow
      label="Created"
      value={new Date($profile.data.user.created_at).toLocaleString()}
      disabled
    />
    <InputRow
      label="Updated"
      value={new Date($profile.data.user.updated_at).toLocaleString()}
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
