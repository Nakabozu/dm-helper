<!-- svelte-ignore a11y-click-events-have-key-events -->
<script lang="ts">
    import { page } from '../appStore';
</script>

<h1>Select a module</h1>
<ul>
    <li on:click={()=>{$page = 1}}>Wild Beyond the Witchlight</li>
    <li on:click={()=>{$page = 2}}>Curse of Strahd (on hold)</li>
</ul>

<style>

</style>