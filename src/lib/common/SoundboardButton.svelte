<script lang="ts">
    import { loop } from "svelte/internal";

    export let sound: string;
    export let text: string;
    export let isLooped: boolean;

    const soundToPlay = new Audio(sound);

    soundToPlay.loop = isLooped;
    let isPlaying: boolean = false;

    const onClick = () => {
        if(soundToPlay.ended || !isPlaying){
            soundToPlay.play()
            isPlaying = true;
        }else{
            soundToPlay.pause()
            soundToPlay.fastSeek(0);
            isPlaying = false;
        }
    }
</script>


<button on:click={()=>{onClick();}} class="soundboard-button">
    {isPlaying ? '⏵' : ''}{text}
</button>


<style>
    .soundboard-button{
        padding: 3px 15px;
        height: fit-content;
        
        font-family: 'norse', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 20px;
        line-height: 20px;

        border: none;

        cursor: pointer;
    }
</style>