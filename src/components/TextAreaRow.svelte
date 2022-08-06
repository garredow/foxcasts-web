<script lang="ts">
  export let label: string;
  export let value: string | number;
  export let disabled = false;
</script>

<div class="root">
  <label for="">{label}</label>
  <textarea {value} {disabled} rows="5" />
</div>

<style>
  .root {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }

  label {
    font-size: 0.8rem;
    margin-bottom: 3px;
  }

  textarea {
    border-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 5px;
    outline-color: var(--accent-color);
  }
</style>
