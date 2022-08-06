<script lang="ts">
  import { Link } from 'svelte-routing';

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

<header>
  <img src="./icon.png" alt="" class="icon" />
  <div class="title">Foxcasts</div>
  {#if $user}
    <nav>
      <Link to="/">Home</Link> |
      <Link to="profile">Profile</Link> |
      <Link to="subscriptions">Subscriptions</Link>
      <!-- <Link to="blog">Blog</Link> -->
    </nav>
  {/if}
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }

  .icon {
    aspect-ratio: 1/1;
    height: 96px;
    width: 96px;
  }

  .title {
    font-size: 2rem;
  }
</style>
