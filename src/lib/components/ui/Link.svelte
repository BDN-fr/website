<script lang="ts">
	interface Props {
		children: any;
		newTab?: boolean;
		principal?: boolean;
		href: string;
	}

	let { children, newTab = false, principal = false, href }: Props = $props();
</script>

<a
	{href}
	target={newTab ? '_blank' : '_self'}
	class="underline decoration-2 hover:underline-offset-3 {principal
		? 'decoration-c-blue-200'
		: ''} hover:decoration-c-pink-200">{@render children?.()}</a
>
