<script lang="ts">
  import { navigate } from 'svelte-routing';
  import { user } from '../stores/auth';
</script>

<header>
  <img src="/icon.png" alt="" class="icon" />
  <div class="spacer" />
  {#if $user}
    <nav class="inline-nav">
      <a href="/" on:click|preventDefault={() => navigate('/dashboard')}>Home</a>
      <a href="/" on:click|preventDefault={() => navigate('/library')}>Library</a>
      <a href="/" on:click|preventDefault={() => navigate('/profile')}>Profile</a>
    </nav>
  {/if}
</header>

<style>
  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
  }

  .icon {
    aspect-ratio: 1/1;
    height: 48px;
    width: 48px;
  }

  header > nav {
    margin-left: 20px;
  }

  .inline-nav > a {
    margin-right: 15px;
  }

  .spacer {
    flex: 1;
  }
</style>
