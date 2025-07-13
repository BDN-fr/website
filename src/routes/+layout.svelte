<script>
	import '../app.css';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import LangageSwitcher from '$lib/components/LangageSwitcher.svelte';
	import { m } from '$lib/paraglide/messages';

	let { children } = $props();
</script>

<svelte:head>
	<title>BDN_fr</title>
  <meta property="og:title" content="BDN_fr" />
  <meta property="og:description" content={m.og_description()} />
  <meta property="og:image" content="/images/profile.png" />
	<script
		defer
		src="https://analytics.bdn-fr.xyz/script.js"
		data-website-id="11f9c6a0-b6cd-4a26-9edf-1c1518b465a0"
	></script>
</svelte:head>

<div class="bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white">
	<nav
		class="absolute top-2 right-0 left-0 mx-auto flex h-12 w-fit items-center gap-3 rounded-full bg-neutral-500/70 px-4 backdrop-blur-md"
	>
		<LangageSwitcher />
		<div class="size-10">
			<ThemeSwitcher />
		</div>
	</nav>

	{@render children()}

	<footer></footer>
</div>