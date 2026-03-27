<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Picture } from '@sveltejs/enhanced-img';
	import Button from '../ui/Button.svelte';

	interface Props {
		children?: Snippet;
		title: string;
		imageSrc?: string | Picture;
		link?: string;
	}
	let { children, title, imageSrc, link, ...rest }: Props = $props();
</script>

<div class="flex flex-col gap-2 h-fit">
	<div class={['flex text-2xl gap-2 items-center', imageSrc ? 'h-8' : '']}>
		{#if imageSrc}
			<enhanced:img src={imageSrc} alt="{title} logo" class="h-8 w-auto" />
		{/if}
		{title}
	</div>
	<div>
		{@render children?.()}
	</div>
	{#if link}
		<Button href={link} target="_blank">Open</Button>
	{/if}
</div>
