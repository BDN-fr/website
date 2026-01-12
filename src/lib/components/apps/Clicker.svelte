<script lang="ts">
	import Window from '../ui/Window.svelte';
	import Button from '../ui/Button.svelte';
	import Icon from '../self/Desktop/Icon.svelte';

	interface Props {
		windowOpened?: boolean;
	}
	let { windowOpened = $bindable(false) }: Props = $props();
	let count = $state(0);
</script>

<Icon
	appName="Clicker"
	onOpen={() => {
		windowOpened = true;
	}}
>
	<span class="icon-[pixel--trending-solid]"></span>
</Icon>

<Window
	title={`Clicker | ${count}`}
	bind:open={windowOpened}
	class="flex flex-col gap-2 items-center justify-center p-8 px-16"
	minWidthClass="min-w-fit"
	minHeightClass="min-h-fit"
	isResizable={false}
	isFullscreenable={false}
>
	<Button onclick={() => (count += 1)}>Click</Button>
</Window>
