<script>
	import '../app.css';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';

	let { children } = $props();
</script>

<div class="bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white">
	<nav
		class="absolute top-2 right-0 left-0 mx-auto flex h-[5vh] w-2/3 items-center gap-2 rounded-full bg-neutral-500/70 px-4 backdrop-blur-md"
	>
		<p>More content soon :)</p>
		<div class="absolute right-4 h-[80%]">
			<ThemeSwitcher />
		</div>
	</nav>

	{@render children()}

	<footer></footer>
</div>