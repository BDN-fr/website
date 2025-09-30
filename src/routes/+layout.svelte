<script>
	import '../app.css';
	import Footer from '$lib/components/self/Footer.svelte';
	import Navbar from '$lib/components/self/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<script
		defer
		src="https://analytics.bdn-fr.xyz/script.js"
		data-website-id="1b262083-0f6a-441f-a438-03ceef09e39a"
	></script>
</svelte:head>

<div class="bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white">
	<Navbar />
	<div class="min-h-svh">
		{@render children()}
	</div>
	<Footer />
</div>
