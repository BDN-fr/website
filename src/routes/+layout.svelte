<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.png';
	import { onMount } from 'svelte';
	import { PRIVATE_UMAMI_SCRIPT } from '$app/env/private';
	import { PRIVATE_UMAMI_ID } from '$app/env/private';

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
	<script defer src="{PRIVATE_UMAMI_SCRIPT}" data-website-id="{PRIVATE_UMAMI_ID}"></script>
	<link rel="icon" href={favicon} />
</svelte:head>

<div
	class="max-w-full min-h-lvh text-base bg-neutral-600 text-neutral-content relative overflow-hidden"
>
	{@render children()}
</div>
