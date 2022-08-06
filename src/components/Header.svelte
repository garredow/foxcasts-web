<script lang="ts">
  import { Link } from 'svelte-routing';
  import { user } from '../stores/auth';
</script>

<header>
  <img src="./icon.png" alt="" class="icon" />
  <div class="title">Foxcasts</div>
  {#if $user}
    <nav>
      <Link to="dashboard">Dashboard</Link> |
      <Link to="profile">Profile</Link> |
      <Link to="library">Library</Link>
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
