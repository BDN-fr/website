<script>
	import ThemeSwitcher from '$lib/components/ui/ThemeSwitcher.svelte';
	import LangageSwitcher from '$lib/components/ui/LangageSwitcher.svelte';
</script>

<nav
	class="absolute top-2 right-0 left-0 mx-auto flex h-12 w-fit items-center gap-3 rounded-full bg-neutral-500/70 px-4 backdrop-blur-md"
>
	<LangageSwitcher />
	<div class="size-10">
		<ThemeSwitcher />
	</div>
</nav>
