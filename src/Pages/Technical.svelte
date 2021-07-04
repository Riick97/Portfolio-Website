<script>
    import SkillsAndExp from '../Sections/SkillAndExp.svelte'
    import Navbar from '../Components/Navbar.svelte'
    import Choice from '../Components/Choice.svelte'
    import TechProject1 from '../Sections/TechProject1.svelte'
    import TechProject2 from '../Sections/TechProject2.svelte'
    import router from 'page'

    let page;
    page = '1'
    
</script>

<Navbar technical={true}/>
<section id="technical">
    <div class="container">
        <div class="demos">
            {#if page === '2'} <TechProject1 /> {/if}
            {#if page === '3'} <TechProject2 /> {/if}  
            {#if page === '1'} <SkillsAndExp on:message /> {/if}  
        </div>
    </div>
    <div class="container second">
        <div class="choices">
            <Choice on:choose={() => page = '1'} name={'Skills and Experience'} />
            <!-- <Choice on:choose={() => page = '2'} name={'Project: Algorithm Visualizer'} />
            <Choice on:choose={() => page = '3'} name={'Project: Hangman Game'} /> -->
            <span on:click="{() => router('/')}"><Choice name={'Exit'} /></span>
        </div>
    </div>
</section>


<style>
    #technical{
        background-color: rgb(9, 9, 9);
        color: #00FF00;
        height: 120vh;
        padding-top: 80px;
        font-family: 'Courier New', Courier, monospace;
    }
    .container{
        flex-direction: column;
    }
    .container.second{
        position: fixed;
        bottom: 0;
        right: 0;
        min-width: 100vw;
        min-height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .demos{
        height: 400px;
    }
    .choices{
        border: green 1px dashed;
        bottom: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: 600px;

    }

    @media only screen and (max-width: 650px) {
        .choices{
            grid-template-columns: 1fr 1fr;
            width: 80vw;
            background: rgb(9,9,9);
        }
        .container{
            width: 90vw;
        }
    }
    
    @media only screen and (max-width: 550px) {
        .choices{
            grid-template-columns: 1fr 1fr;
            width: 80vw;
            background: rgb(9,9,9);
        }
    }

</style>