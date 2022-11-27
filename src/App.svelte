<script lang="ts">
  import Navbar from './lib/common/Navbar.svelte';
  import SelectModule from './pages/SelectModule.svelte';
  import WildBeyondWitchlight from './lib/WildsBeyondWitchlight/WildBeyondWitchlight.svelte';

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