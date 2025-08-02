<script>
	import '../app.css';
	import Footer from '$lib/components/self/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<script
		defer
		src="https://analytics.bdn-fr.xyz/script.js"
		data-website-id="11f9c6a0-b6cd-4a26-9edf-1c1518b465a0"
	></script>
</svelte:head>

<div class="bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white">
	<main>
		{@render children()}
	</main>
	<Footer/>
</div>