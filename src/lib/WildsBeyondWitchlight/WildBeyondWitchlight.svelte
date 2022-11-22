<!-- svelte-ignore a11y-click-events-have-key-events -->
<script lang="ts">
    import Carnival from './CarnivalSelect.svelte'
    import Hither from './HitherSelect.svelte'
    import { witchlightChapter } from './witchlightStore';

    const changeChapter = (newChapter: number) => {
        $witchlightChapter = newChapter;
    }
</script>

<main>
    {#if $witchlightChapter === 0}
        <h1>Wild Beyond the Witchlight</h1>
        <h3>Chapter Select</h3>
        <ul>
            <li on:click={()=>{changeChapter(1)}}>Chapter 1: Witchlight Carnival</li>
            <li on:click={()=>{changeChapter(2)}}>Chapter 2: Hither</li>
            <li>Chapter 3: Thither</li>
            <li>Chapter 4: Yon</li>
            <li>Chapter 5: Palace of Heart's Desire</li>
        </ul>
    {/if}
    {#if $witchlightChapter === 1}
        <Carnival />
    {/if}
    {#if $witchlightChapter === 2}
        <Hither />
    {/if}
</main>

<style>

</style>