<script lang="ts">
  export let title: string;
</script>

<section>
  <div class="title">{title}</div>
  <slot />
</section>

<style>
  section {
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: 20px;
    padding: 10px 15px 10px 15px;
  }

  section .title {
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 10px;
    text-align: center;
  }
</style>
