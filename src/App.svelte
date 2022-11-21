<script lang="ts">
  import Navbar from './lib/common/Navbar.svelte';
  import SelectModule from './pages/SelectModule.svelte';
  import WildBeyondWitchlight from './pages/WildBeyondWitchlight.svelte';

	import { page, moduleMenuObjects } from './appStore';

  async function loadComponent(name) {
    console.log(`Loading ./pages/${name}.svelte`)
    return await import(`./pages/${name}.svelte`);
  }
</script>

<main>
  <Navbar/>
  {#each moduleMenuObjects as moduleMenuObject}
    {#if $page === moduleMenuObject.value}
      <WildBeyondWitchlight/>
    {/if}
  {/each}
</main>

<style>
  main{
    height: 100vh;
    width: 100vw;
    padding: 10px;

    overflow-y: auto;
  }
</style>