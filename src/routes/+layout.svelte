<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div
	class="max-w-full min-h-lvh text-base bg-neutral-600 text-neutral-content relative overflow-hidden"
>
	{@render children()}
</div>
