<!-- svelte-ignore a11y-click-events-have-key-events -->
<script lang="ts">
    import HitherOverview from './Hither/HitherOverview.svelte';
    import TelemyHill from './Hither/TelemyHill.svelte'
    import Owell from './Hither/Owell.svelte';

    import {hitherTopic} from './witchlightStore'

    const setHitherTopic = (topicNumber) => {
        $hitherTopic = topicNumber;
    }
</script>

{#if $hitherTopic === 0}
    <h1>Select a Hither topic</h1>
    <ul>
        <li on:click={()=>{setHitherTopic(1)}}>Hither Overview</li>
        <li on:click={()=>{setHitherTopic(2)}}>Slanty Tower</li>
        <li on:click={()=>{setHitherTopic(3)}}>Telemy Hill</li>
        <li on:click={()=>{setHitherTopic(4)}}>Brigands' Tollway</li>
        <li on:click={()=>{setHitherTopic(5)}}>Downfall</li>
        <li on:click={()=>{setHitherTopic(6)}}>Bavlorna's Cottage</li>
        <li on:click={()=>{setHitherTopic(7)}}>Owells</li>
    </ul>
{/if}
{#if $hitherTopic === 1}
    <HitherOverview/>
{/if}
{#if $hitherTopic === 2}
    Slanty Tower
{/if}
{#if $hitherTopic === 3}
    <TelemyHill/>
{/if}
{#if $hitherTopic === 4}
    Brigands' Tollway
{/if}
{#if $hitherTopic === 5}
    Downfall
{/if}
{#if $hitherTopic === 6}
    Bavlorna's Cottage
{/if}
{#if $hitherTopic === 7}
    <Owell/>
{/if}

<style>

</style>