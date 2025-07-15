<script>
	import '../app.css';
	import { m } from '$lib/paraglide/messages';
	import Navbar from '$lib/components/self/Navbar.svelte';
	import Footer from '$lib/components/self/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>BDN_fr</title>
  <meta property="og:title" content="BDN_fr" />
  <meta property="og:description" content={m.og_description()} />
  <meta property="og:image" content="$lib/assets/images/profile.png" />
	<script
		defer
		src="https://analytics.bdn-fr.xyz/script.js"
		data-website-id="11f9c6a0-b6cd-4a26-9edf-1c1518b465a0"
	></script>
</svelte:head>

<div class="bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white">
	<Navbar/>
	<main>
		{@render children()}
	</main>
	<Footer/>
</div>