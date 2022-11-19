<script lang="ts">
    import SoundboardButton from "../../common/SoundboardButton.svelte";
    import Footsteps from "../../../assets/EchoingFootstepsStone.mp3";
    import KeysJingling from "../../../assets/KeysJingling.mp3";

    import { hitherStrings } from "./hither-strings";
</script>

<h1>Telemy Hill</h1>
<div class="flex-row flex-grow">
    <!--COLUMN 1-->
    <div class="soundboard-panel flex-row flex-wrap width-50">
        <SoundboardButton sound={Footsteps} text='Footsteps' isLooped={true}/>
        <SoundboardButton sound={KeysJingling} text='Keys Jingling' isLooped={true}/>
    </div>
    <!--COLUMN 2-->
    <article class="flex-row module-text width-50">
        <section>
            <h2>Meeting Jingle Jangle</h2>
            <p>{hitherStrings.meetingJingle}</p>
            <h2>Descending</h2>
            <p>{hitherStrings.descending}</p>
            <h2>Insight Check</h2>
            <p>{hitherStrings.insight}</p>
            <h2>Jingle Jangle's Tale of Woe</h2>
            <p>{hitherStrings.taleOfWoe}</p>
            <h2>Offerings to Jingle Jangle</h2>
            <p>{hitherStrings.offerings}</p>
        </section>
    </article>
</div>

<style>
    .flex-row{
        display: flex;
        flex-direction: row;
    }
    
    .flex-column{
        display: flex;
        flex-direction: column;
    }

    .flex-grow{
        flex-grow: 1;
    }

    .flex-wrap{
        flex-wrap: wrap;
    }

    .width-50{
        width: 50%;
    }

    .soundboard-panel{
        display:flex;
        justify-content: space-between;
        background-color: aqua;
    }

    .module-text{
        background-color: blueviolet;
    }
</style>