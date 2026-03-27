<script lang="ts">
	import AboutMe from '$lib/components/apps/AboutMe/AboutMe.svelte';
	import ChangeMode from '$lib/components/apps/ChangeMode.svelte';
	import Clicker from '$lib/components/apps/Clicker.svelte';
	import Github from '$lib/components/apps/Github.svelte';
	import { isMobile } from '$lib/stores/IsMobile';
	import { onMount } from 'svelte';
	onMount(() => {
		if (!(localStorage.getItem('sawHelpMessage') == 'true')) {
			// Alert for now, maybe a Window later
			alert(`To use the website,${$isMobile ? '' : ' double'} click on an icon`);
			localStorage.setItem('sawHelpMessage', 'true');
		}
	});
</script>

<div
	class={[
		'min-w-svw max-w-lvw min-h-svh max-h-lvh gap-4 p-4 flex flex-wrap place-content-start',
		'wallpaper',
		$isMobile ? 'flex-row self-center' : 'flex-col'
	]}
>
	<!-- <ChangeMode /> -->
	<AboutMe />
	<Clicker />
	<Github />
</div>

<style>
	.wallpaper {
		background-image: url('/wallpaper.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-clip: border-box;
		background-position: center;
	}
</style>
