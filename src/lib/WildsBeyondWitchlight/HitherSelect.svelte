<!-- svelte-ignore a11y-click-events-have-key-events -->
<script lang="ts">
    import HitherOverview from './Hither/HitherOverview.svelte';
    import TelemyHill from './Hither/TelemyHill.svelte'
    import Owell from './Hither/Owell.svelte';
    // State Management
    import { topic } from '../../appStore';

    const setHitherTopic = (topicNumber) => {
        $topic = topicNumber;
    }
</script>

{#if $topic === 0}
<article id="hither-topics" class="hither-topics-container">
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
</article>
{/if}
{#if $topic === 1}
    <HitherOverview/>
{/if}
{#if $topic === 2}
    Slanty Tower
{/if}
{#if $topic === 3}
    <TelemyHill/>
{/if}
{#if $topic === 4}
    Brigands' Tollway
{/if}
{#if $topic === 5}
    Downfall
{/if}
{#if $topic === 6}
    Bavlorna's Cottage
{/if}
{#if $topic === 7}
    <Owell/>
{/if}

<style>
.hither-topics-container li{
    cursor: pointer;
}
</style>