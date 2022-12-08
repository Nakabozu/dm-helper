<script lang="ts">
  import { Navbar, SelectModule, WildBeyondWitchlight } from './components';
	import { page, moduleMenuObjects } from './appStore';

  async function loadComponent(name) {
    console.log(`Loading ./pages/${name}.svelte`)
    return await import(`./pages/${name}.svelte`);
  }
</script>

<main>
  <Navbar/>
  
  {#if $page === 0 || $page >= 2}
    <SelectModule/>
  {/if}

  {#if $page === 1}
    <WildBeyondWitchlight/>
  {/if}
</main>

<style>
  main{
    height: 100vh;
    width: 100vw;
    padding: 10px;

    overflow-y: auto;
  }
</style>