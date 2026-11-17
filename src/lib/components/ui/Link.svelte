<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props {
		children: Snippet;
		href?: string;
		class?: string;
		newTab?: boolean;
	}
	let { children, href, class: className, newTab = true, ...rest }: HTMLAnchorAttributes & Props = $props();
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
