<script lang="ts">
	import AboutMe from '$lib/components/apps/AboutMe.svelte';
	import ChangeMode from '$lib/components/apps/ChangeMode.svelte';
	import Clicker from '$lib/components/apps/Clicker.svelte';
	import Github from '$lib/components/apps/Github.svelte';
</script>

<div
	class="min-w-svw max-w-lvw min-h-svh max-h-lvh gap-4 p-4 flex flex-col flex-wrap place-content-start"
>
	<Clicker />
	<AboutMe />
	<Github />
	<ChangeMode />
</div>
