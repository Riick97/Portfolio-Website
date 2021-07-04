<script>
    import Navbar from '../Components/Navbar.svelte'
    import Linkbar from '../Components/Linkbar.svelte'
    import ProjectsNav from '../Components/ProjectsNav.svelte'
</script>

<Navbar technical={false} />
<Linkbar />
<section id="projectView">  
    <div class="container">
        <h3>Produtivity Flutter App</h3>
        <p>The is an application for organizing your stuff</p>
        <div class="image"></div>
        <ProjectsNav prev='/project2' next='/project1' />
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
        background-image: url("/images/website.jpg");
        background-size: cover;
        max-width: 600px;
        margin: 50px auto 0 auto;
    }
</style>