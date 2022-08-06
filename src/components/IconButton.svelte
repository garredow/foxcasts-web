<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import Icon from './Icon.svelte';

  export let icon: typeof SvelteComponent;
  export let disabled = false;
  export let onClick: () => void;
</script>

<button class="root" {disabled} on:click={onClick}>
  <Icon size={24}><svelte:component this={icon} /></Icon>
</button>

<style>
  .root {
    outline: none;
    border: none;
    background: none;
    width: 100%;
    padding: 5px;
    text-transform: uppercase;
    font-weight: var(--bold-font-weight);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
