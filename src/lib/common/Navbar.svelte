<script lang="ts">
    import { page } from '../../appStore';
    import { witchlightChapter, hitherTopic } from '../WildsBeyondWitchlight/witchlightStore'
</script>

<button on:click={()=>{$page = 0; $witchlightChapter = 0; $hitherTopic = 0;}}>Reset</button>

<style>

</style>