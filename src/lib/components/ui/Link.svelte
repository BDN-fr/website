<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		href?: string;
		class?: string;
		newTab?: boolean;
	}
	let { children, href, class: className, newTab = true, ...rest }: Props = $props();
</script>

<a
	{...rest}
	{href}
	class={[
		'decoration-accent underline underline-offset-2 decoration-2 hover:bg-selection hover:no-underline',
		className
	]}
	target={newTab ? '_blank' : '_self'}
>
	{@render children()}
</a>
