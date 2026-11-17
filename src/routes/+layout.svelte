<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.png';
	import { onMount } from 'svelte';
	import { PUBLIC_UMAMI_SCRIPT } from '$app/env/public';
	import { PUBLIC_UMAMI_ID } from '$app/env/public';

	let { children } = $props();

	onMount(() => {
		console.log(
			"Hi there ! You're searching things arn't you ?\n" +
				'Have fun with the developper console, you can also check the source code on github: https://github.com/BDN-fr/website\n' +
				'See ya :3'
		);
	});
</script>

<svelte:head>
	<script defer src="{PUBLIC_UMAMI_SCRIPT}" data-website-id="{PUBLIC_UMAMI_ID}"></script>
	<link rel="icon" href={favicon} />
</svelte:head>

<div
	class="max-w-full min-h-lvh text-base bg-neutral-600 text-neutral-content relative overflow-hidden"
>
	{@render children()}
</div>
