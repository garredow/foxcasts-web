<script lang="ts">
  import { onDestroy, onMount } from 'svelte';

  let message = '';
  let timer;

  onMount(() => {
    timer = setTimeout(() => {
      message = 'Loading...';
    }, 2000);
  });

  onDestroy(() => clearTimeout(timer));
</script>

<div class="root">{message}</div>

<style>
  .root {
    text-align: center;
    padding: 20px;
  }
</style>
