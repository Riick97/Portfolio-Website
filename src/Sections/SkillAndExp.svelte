<script>
    import Typewriter from 'svelte-typewriter'
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function contact() {
		dispatch('message', {
			text: 'Hello!'
		});
	}
</script>



<div class="skillAndExp">
    <div class="info">
        <h3>Skills & Experience</h3>
        <p>
            The majority of my skills in programming are centered around full stack development.
            Addtionally, I also have some skills in web design and layouts
        </p>
    </div> 
    <div class="bottom">
        <button on:click="{contact}" class="greenBtn">Work with me</button>
        <div class="skills">
            <div class="typer">
                 <Typewriter cursor={'#0F0'} delay={4000} loop interval={[230, 240, 200, 200, 550]}>
                    <span>Svelte</span>
                    <span>NodeJs</span>
                    <span>React</span>
                    <span>MongoDB</span>
                    <span>CSS</span>
                    <span>Express</span>
                    <span>MySQL</span>
                </Typewriter> 
            </div>  
        </div> 
    </div>

    <div class="categories">
        <div class="ascii-table">
            <Typewriter interval={1}>
            <table>
                <tr id="head">
                    <td>Backend</td><td>Frontend</td><td>Tools</td>
                </tr>
                <tr>
                    <td>NodeJS</td><td>Svelte</td><td>VsCode</td>
                </tr>
                <tr>
                    <td>Express</td><td>React</td><td>Affinity Designer</td>
                </tr>
                <tr>
                    <td>MongoDB</td><td>Flutter</td><td>Html, CSS</td>
                </tr>
                <tr>
                    <td>MySQL</td><td></td><td>JavaScript</td>
                </tr>
                <tr>
                    <td></td><td></td><td>Java</td>
                </tr>
                <tr>
                    <td></td><td></td><td>Git</td>
                </tr>
            </table>
            </Typewriter>
        </div>
    </div>  
</div> 

<style>
    h3{
        margin-bottom: 25px;
    }
    p{
        margin-bottom: 50px;
    }
    .skillAndExp{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .greenBtn{
        color: #00FF00;
        border: #00FF00 2px solid;
        background-color: transparent;
        padding: 5px 10px;
        min-width: 150px;
        width: 100px;
        min-height: 30px;
        height: 30px;
        border-radius: 25px;
        margin: auto;
        margin-top: 10px;
        cursor: pointer;
    }
    .skills{
        position:relative;
        width: 100%;
        font-size: 4rem;
        font-weight: bold;
        overflow: hidden;
    }
    .typer{
        padding: 0 20px;
        height: 100px;
        width: 100%;
        overflow: hidden;
    }
    .bottom{
        display: flex;
    }
    #head td {
        padding-top: 10px;
        padding-bottom: 10px;
        font-weight: bold;
        font-size: 1rem;
    }
    .categories {
        margin-top: 10px;
        grid-column: span 2;
        display: grid;
        grid-template-columns: 1fr;   
    }
    .info{
        display: flex;
        flex-direction: column;
        padding-right: 40px;
        width: 100%;
    }

    /* Asci Table */
    .ascii-table {
        font: medium/1 monospace;
        display: inline-block;
        position: relative;
        color: #00FF00;
    }
    .ascii-table table {
        border-collapse: collapse;
        width: 100%;
    }
    .ascii-table td {
        border: 1px dashed #0F0;
        padding: .5em;
        position: relative;
    }
    .ascii-table tr td:before {
        position: absolute;
        width: 11px;
        height: 11px;
        content: "";
        background-image: url('/images/plus-solid.svg');
        background-color: transparent;
        top: -6px;
        left: -5px;
    }
    .ascii-table tr td:last-child:after, .ascii-table tr:last-child td:after {
        position: absolute;
        color: #0F0;
        width: 11px;
        height: 11px;
        content: "";
        background-image: url('/images/plus-solid.svg');
        background-color: transparent;
        bottom: -8px;
        right: -8px;
    }
    .ascii-table:before {
        position: absolute;
        width: 11px;
        height: 11px;
        content: "";
        background-image: url('/images/plus-solid.svg');
        background-color: transparent;
        top: -7px;
        right: -7px;
    }
    .ascii-table:after {
        position: absolute;
        width: 11px;
        height: 11px;
        content: "";
        background-image: url('/images/plus-solid.svg');
        background-color: transparent;
        bottom: -7px;
        left: -7px;
    }


    @media only screen and (max-width: 550px) {
        
        .typer{
            height: 50px;
            width: 100%;
            font-size: 2rem;
            padding: 0;
            margin: 0;
            margin-top: 10px;
        }
        .bottom{
            flex-direction: column;
        }
        .greenBtn{
            margin: 0;
            padding: 0;
        }
    }

</style> 