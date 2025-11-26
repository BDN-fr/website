<script>
	import '../app.css';
	import Footer from '$lib/components/self/Footer.svelte';
	import Navbar from '$lib/components/self/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<script
    src="https://rybbit.bdn-fr.xyz/api/script.js"
    data-site-id="1"
    defer
	></script>
</svelte:head>

<div class="bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white">
	<Navbar />
	<div class="min-h-svh">
		{@render children()}
	</div>
	<Footer />
</div>
