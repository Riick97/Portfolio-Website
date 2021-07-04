<script>
	import router from 'page'
	import Navbar from '../Components/Navbar.svelte'
	import Welcome from '../Sections/Welcome.svelte'
	import Intro from '../Sections/Introduction.svelte'
	import Prompts from '../Sections/Prompts.svelte'
    import Projects from '../Sections/Projects.svelte'
	import Footer from '../Sections/Footer.svelte'
	import About from '../Sections/Footer.svelte'
</script>

<Navbar technical={false}/>
<Welcome/>
<Intro/>
<Prompts/>
<Projects/>
<Footer/>