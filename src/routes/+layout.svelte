<script>
	import '../app.css';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import LangageSwitcher from '$lib/components/LangageSwitcher.svelte';

	let { children } = $props();
</script>

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