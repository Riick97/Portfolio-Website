<script>
    import Navbar from '../Components/Navbar.svelte'
    import Linkbar from '../Components/Linkbar.svelte'
    import ProjectsNav from '../Components/ProjectsNav.svelte'

    const github = "https://github.com/Riick97/websitezuper"
    const link = "https://riick97.github.io/websitezuper/"
</script>

<Navbar technical={false} />
<Linkbar back="/" github={github} link={link} />
<section id="projectView">  
    <div class="container">
        <h3>Zuper Construction</h3>
        <p>This was a website for Zuper Construction, a construction company based in curaçao.</p>
        <div class="image"></div>
        <ProjectsNav prev='/project1' next='/project1' />
    </div>
</section> 

<style>
    h3{
        margin-bottom: 25px;
    }
    #projectView{
        padding: 75px 0;
        text-align: center;
    }
    .container{
        flex-direction: column;
    }
    .image{
        width: 100%;
        height: 350px;
        margin-top: 50px;
        background-image: url("/images/zuper.png");
        background-size: cover;
        background-position: center;
        max-width: 600px;
        margin: 50px auto 0 auto;
    }
</style>