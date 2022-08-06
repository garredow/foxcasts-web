<script lang="ts">
  import type { Podcast } from '../models';

  export let podcast: Podcast;

  function unsubscribe() {
    console.log('unsub');
  }
</script>

<div class="root">
  <img class="artwork" src={podcast.artwork?.url} alt="" />
  <div class="info">
    <div class="title">{podcast.title}</div>
    <div class="author">{podcast.author}</div>
    <!-- <div class="actions">
      <a href="/" on:click|preventDefault={unsubscribe}>Unsubscribe</a>
    </div> -->
  </div>
</div>

<style>
  .root {
    display: flex;
    margin: 10px 0;
  }

  .artwork {
    aspect-ratio: 1/1;
    height: 48px;
    width: 48px;
    border-radius: 5px;
    margin-right: 10px;
  }

  .info {
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title,
  .author {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .author {
    color: rgba(0, 0, 0, 0.5);
  }

  .actions {
    font-size: 0.8rem;
  }
</style>
