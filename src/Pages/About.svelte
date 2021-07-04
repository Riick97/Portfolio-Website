<script>
	import router from 'page'
	import Navbar from '../Components/Navbar.svelte'
    import AboutMe from '../Sections/AboutMe.svelte'
    import Contact from '../Sections/Contact.svelte'
	import Footer from '../Sections/Footer.svelte'
	import * as animateScroll from "svelte-scrollto";
	import { onMount } from 'svelte'
	import Notifications from 'svelte-notifications';


	export let contact

	if(contact) {
		onMount(() => {
			animateScroll.scrollTo({element: '#formSection'})
		})
	}
	
</script>

<Navbar technical={false}/>
<AboutMe/>
<Notifications> <Contact/> </Notifications>
<Footer/>