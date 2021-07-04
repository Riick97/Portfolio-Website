<script>
    import page from 'page';
    import Typewriter from 'svelte-typewriter'

    function changePage() {
        page('/technical')
    }

</script>

<section id="main">
    <div class="container">
        <div class="info">
            <div class="title">
                <h1>Hello.</h1>
                <h1>I am Ulric</h1>
            </div>
            <div class="description">
                <p>Software engineer & full-stack developer</p>
            </div>
            <div class="links">
                <button class="blackBtn">
                    <div class="neumorphism">
                        <a href="/about">about me</a>
                    </div>
                </button>
                <div on:click="{() => {window.open('https://www.linkedin.com/in/ulric-ricardo-a1955918a', '_blank').focus()}}" class="link linkedIn"><i class="fab fa-linkedin-in"></i></div>
                <div on:click="{() => {window.open('https://github.com/Riick97', '_blank').focus()}}" class="link github"><i class="fab fa-github-alt"></i></div>
            </div>
        </div>
        <div class="screen">
            <div on:click="{changePage}" class="computerScreen">
                <Typewriter cascade interval={[130, 140, 100, 100, 150]} cursor={"#0F0"} >
                    <p>Hello there!</p>
                </Typewriter>
                <Typewriter delay={4000} cascade interval={[130, 140, 100, 100, 150]} cursor={"#0F0"} >
                    <p>Welcome to my website</p>
                </Typewriter>
            </div>
        </div>
    </div>
</section>

<style>
    #main {
        min-height: 300px;
        padding: 90px 0;
    }
    .info {
        min-height: 200px;
    }
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .description{
        margin: 15px 0;
        padding: 10px 0;
    }
    .link{
        background-color: rgb(155, 155, 155);
        height: 35px;
        width: 35px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin: 0 7px;
        cursor: pointer;
    }
    .links{
        margin-top: 40px;
        display: flex;
    }
    .link{
        font-size: 1.3rem;
    }
    .linkedIn{
        font-size: 1.2rem;
    }
    .linkedIn:hover{
        background-color: rgb(237, 237, 237);
        color: #0072b1;
    }
    .github:hover{
        background-color: rgb(237, 237, 237);
    }

    .screen {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #0F0;
    }

    .computerScreen p {
        margin-bottom: 5px;
    }
    
    h1 {
        font-size: 3rem;
    }
    .computerScreen{
        width: 300px;
        height: 250px;
        background-image: url('/images/computerScreen.svg');
        background-size: cover;
        background-position: center;
        padding: 25px 20px;
        cursor: pointer;
    }


    @media only screen and (max-width: 650px) {
        .container{
            display: flex;
            flex-direction: column;
            width: 90vw;
        }
        .screen{
            margin-top: 35px;
        }
        .computerScreen{
            height: 290px;
            width: 390px;
            max-width: 350px;
            padding: 30px 20px;
        }
    }
</style>