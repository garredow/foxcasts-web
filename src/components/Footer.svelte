<script lang="ts">
  import { authClient } from '../lib/authClient';
  import { isAuthenticated, user } from '../stores/auth';

  async function login() {
    await authClient.loginWithPopup();
    user.set(await authClient.getUser<any>());
    isAuthenticated.set(true);
  }

  function logout() {
    authClient.logout();
  }
</script>

<footer>
  {#if $user}
    <a class="btn" href="/#" on:click={logout}>Log Out</a>
  {:else}
    <a class="btn" href="/#" on:click={login}>Sign In</a>
  {/if}
</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
</style>
