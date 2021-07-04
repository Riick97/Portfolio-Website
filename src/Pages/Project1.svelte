<script>
    import Navbar from '../Components/Navbar.svelte'
    import Linkbar from '../Components/Linkbar.svelte'
    import page from 'page'
    import ProjectsNav from '../Components/ProjectsNav.svelte'

    const github = "https://github.com/Riick97/LVS-studentManagementSystem"
    const link = "https://studentmanagementsystm.herokuapp.com/#"
</script>

<Navbar technical={false} />
<Linkbar link={link} github={github} />
<section id="projectView">  
    <div class="container">
        <h3>Student Management System</h3>
        <p>The LVS is a student management system for handling students and grading them</p>
        <div class="image"></div>
        <ProjectsNav prev='/project2' next='/project2' />
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
        background-image: url("/images/websitePics/lvsWelcome.png");
        background-size: cover;
        background-position: center;
        max-width: 600px;
        margin: 50px auto 0 auto;
    }

</style>