<script lang="ts">
  export let size: number = 24;
  export let disabled = false;
</script>

<div class:disabled style={`height: ${size}px; width: ${size}px;`}>
  <slot />
</div>

<style>
  .disabled {
    opacity: 0.2;
  }
</style>
