<script>
	import { onMount } from 'svelte';
	import Icon from '../self/Desktop/Icon.svelte';
	import Window from '../ui/Window.svelte';
	let open = $state(false);

	onMount(() => {
		if (location.hash.includes('jeremy')) {
			open = true;
		}
	});
</script>

<Icon
	appName="Jeremy"
	onOpen={() => {
		open = true;
	}}
>
	<img src="/jerem.gif" alt="Jeremy" />
</Icon>

<Window bind:open title="Jeremy" isResizable={false} isFullscreenable={false}>
	<img src="/jerem.gif" alt="Jeremy" class="size-full" />
</Window>
