<script lang="ts">
    import { page, chapter, topic, witchlightChaptersList, hitherTopicsList } from '../../appStore';
    import { hitherStrings } from '../WildsBeyondWitchlight/Hither/hither-strings';
</script>

<select name="page-select" id="page-select" bind:value={$page}>
    <option value={0}>Page Select</option>
    <option value={1}>Wilds Beyond the Witchlight</option>
</select>

{#if $page !== 0}
<select name="chapter-select" id="chapter-select" bind:value={$chapter}>
    {#each witchlightChaptersList as chapterInList, i}
        <option value={i}>{chapterInList}</option>
    {/each}
</select>
{/if}

{#if $page !== 0 && $chapter !== 0}
<select name="topic-select" id="topic-select" bind:value={$topic}>
    {#each hitherTopicsList as topicInList, i}
        <option value={i}>{topicInList}</option>
    {/each}
</select>
{/if}

<style>

</style>