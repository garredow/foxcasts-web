<script lang="ts">
  export let title: string;
  export let onClick: () => void;
</script>

<button class="root" on:click={onClick}>{title}</button>

<style>
  .root {
    background: none;
    outline: none;
    border: none;

    background-color: var(--accent-color);
    color: #fff;
    padding: 10px 15px;
    text-transform: uppercase;
    border-radius: 5px;
  }
</style>
