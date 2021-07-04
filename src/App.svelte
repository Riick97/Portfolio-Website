<script>
	import router from 'page'
	import Navbar from './Components/Navbar.svelte'
	import Home from './Pages/Home.svelte'
	import About from './Pages/About.svelte'
	import Technical from './Pages/Technical.svelte'
	import Project1 from './Pages/Project1.svelte'
	import Project2 from './Pages/Project2.svelte'
	import Project3 from './Pages/Project3.svelte'
	import * as animateScroll from "svelte-scrollto";
	import { onMount } from 'svelte';


	let page;
	router('/', () => page = Home)
	router('/about', () => page = About )
	router('/technical', () => page = Technical)
	router('/project1', () => page = Project1)
	router('/project2', () => page = Project2)
	router('/project3', () => page = Project3)
	router.start();

	let scroll = false
	function contact() {
		console.log('active')
		router('/about')
		scroll = true
		setInterval(() => scroll = false, 100)
	}

</script>

<svelte:head>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
</svelte:head>


{#if page === Home} <Home /> {/if}
{#if page === About}  <About contact={scroll}/> {/if}
{#if page === Technical} <Technical on:message={contact} /> {/if}
{#if page === Project1} <Project1 /> {/if}
{#if page === Project2} <Project2 /> {/if}
{#if page === Project3} <Project3 /> {/if}

<style>
	@media (min-width: 640px) {

	}
</style>