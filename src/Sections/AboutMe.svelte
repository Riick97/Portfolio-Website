 <script>
    import Linkbar from '../Components/Linkbar.svelte'
    import * as animateScroll from "svelte-scrollto";
    import page from 'page'
    import tippy from 'tippy.js';
    import 'tippy.js/dist/tippy.css';
    import {onMount} from 'svelte'

 
    
    
    let description = 'Curaçao is an island country in the southern Caribbean Sea and the Dutch Caribbean region, about 65 km (40 mi) north of the Venezuelan coast'
    let link = 'https://en.wikipedia.org/wiki/Curaçao'

    onMount(() => {
        tippy('#curacao', {
          content: description
        })
    })

    let linkedIn = 'https://www.linkedin.com/in/ulric-ricardo-a1955918a'

</script>

<Linkbar about={true} linkedIn={linkedIn} />
<section id="aboutMe">
    <div class="container">
        <div class="profileImage">

        </div>
        <div class="info">
            <p>My name is Ulric Ricardo and I am a Software Engineer born in <span on:click="{() => window.open(link)}" id="curacao">Curaçao</span> with a passion for Engineering, Software, Art, and Design.</p>
            <p>I studied Business Management and Computer Science(ICT) at the University of Curaçao and I enjoy building great products and helping others achieve their goals</p>
        </div>
        <div class="contact">
            <button on:click={() => animateScroll.scrollTo({element: '#formSection'})} class="blackBtn">
                <div class="neumorphism">
                    Let's Work
                </div>
            </button>
        </div>
    </div>
</section>

<style>
    #aboutMe{
        padding: 90px 0;
        min-height: 500px;
    }
    p {
        margin: 40px 0
    }
    .profileImage{
        background-color: rgb(133, 133, 133);
        height: 150px;
        width: 150px;
        margin: auto;
        border-radius: 50%;
        background-image: url("/images/profile.png");
        background-size: cover;
        background-position: center;
    }
    .info{
        max-width: 500px;
        margin: 0 auto;
    }
    .container {
        flex-direction: column;
        text-align: center;
    }
    .blackBtn{
        margin: auto;
    }
    #curacao{
        color: #2d5cc5;
        cursor: pointer;
    }
    #curacao:hover{
        text-decoration: underline;
    }

</style>