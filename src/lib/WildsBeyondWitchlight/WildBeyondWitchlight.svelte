<!-- svelte-ignore a11y-click-events-have-key-events -->
<script lang="ts">
    import {CarnivalSelect, HitherSelect} from '../../components';
    // State Management
    import { chapter, witchlightChaptersList } from '../../appStore';

    const changeChapter = (newChapter: number) => {
        $chapter = newChapter;
    }
</script>

<article>
    {#if $chapter === 0 || $chapter > 2}
        <h1>Wild Beyond the Witchlight</h1>
        <h3>Chapter Select</h3>
        <ul>
            {#each witchlightChaptersList as chapterInList, i}
                <li on:click={()=>{changeChapter(i)}}>{chapterInList}</li>
            {/each}
        </ul>
    {/if}
    {#if $chapter === 1}
        <CarnivalSelect />
    {/if}
    {#if $chapter === 2}
        <HitherSelect />
    {/if}
</article>

<style>

</style>