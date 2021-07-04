<script>
    import page from 'page'
    import {onMount} from 'svelte'
    import AOS from 'aos'
    import 'aos/dist/aos.css';

    function linkProject1(){
        page('/project1')
    }
    function linkProject2(){
        page('/project2')
    }
    function linkProject3(){
        page('/project3')
    }

    onMount(() => {
        AOS.init();
    })

</script>


<section id="projects">
    <div class="container">
        <h2>Some things I've built</h2>
        <p>Here are some of the projects I've worked on</p>
        <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="100" class="projects">
            <div on:click="{linkProject1}" class="project">
                <div id="lvs" class="image"></div>
                <div class="category">web application</div>
                <div  class="info">LVS Student Management System</div>
            </div>
            <div on:click="{linkProject2}" class="project">
                <div id="zuper" class="image"></div>
                <div class="category">website</div>
                <div  class="info">Zuper Construction</div>
            </div>
            <!-- <div on:click="{linkProject3}" class="project project3">
                <div id="flutter" class="image"></div>
                <div class="category">mobile application</div>
                <div  class="info">Flutter App</div>
            </div> -->
        </div>
        <div class="prompt">
            <h5>Start a project</h5>
            <p>Interested in woking together?</p>
            <button class="blackBtn">
                <div class="neumorphism">
                    <a href="/about">Let's do this</a>
                </div>
            </button>
        </div>
    </div>
</section>

<style>
    #projects{
        border: green 1px solid;
        padding: 50px 0;
        padding-bottom: 100px;
        text-align: center;
        background-color: rgb(234, 234, 234);
    }
    .container{
        flex-direction: column;
    }
    h2{
        margin-bottom: 30px;
    }
    h5, p{
        margin: auto;
    }

    .projects{
        display: flex;
        justify-content: center;
        margin: 50px 0;
        cursor: pointer;
    }
    .project{
        position: relative;
        padding: 5px;
        min-height: 120px;
        width: 200px;
        margin: 20px;
        border-radius: 10px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: left;
        overflow: hidden;
        transition: ease-in-out 100ms;
    }
    .project:hover{
        transform: scale(1.05);
    }
    #lvs{
        background-image: url("/images/websitePics/lvsWelcome.png");
        background-size: cover;
        background-position-x: center;
    }
    /* #flutter{
        background-image: url("/images/zuper.png");
        background-size: cover;
    } */
    #zuper{
        background-image: url("/images/zuper.png");
        background-size: cover;
        background-position-x: center;
    }
    .image{
        height: 100px;
        width: 100%;
        border-radius: 7px;
    }
    .category{
        width: 100%;
        padding: 5px 0;
        font-size: .8rem;
        font-weight: bold;
    }
    .info{
        height: 75px;
        width: 100%;
        padding-top: 5px;
    }
    .prompt{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 75px;
        background-color: rgb(205, 205, 205);
        margin-top: 50px;
        border-radius: 10px;
    }
    .blackBtn{
        margin: auto;
    }

    @media only screen and (max-width: 650px) {
        .container{
            display: flex;
            flex-direction: column;
            width: 90vw;
        }
        .projects{
            display: flex;
            flex-direction: column;
        }
        .project{
            margin: auto;
            margin-bottom: 25px;
            width: 300px;
            height: 300px;
        }
        .image{
            height: 200px;
        }
        /* .project3{
            grid-column: span 2;
            height: 400px;
            width: 425px;
        }
        .project3 .image{
            height: 100%;
            width: 100%;
        } */
        .prompt p{
            display: none;
        }
        .prompt{
            grid-template-columns: 1fr 1fr;
        }
    }
</style>