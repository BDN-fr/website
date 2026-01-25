<script lang="ts">
	import Window from '../ui/Window.svelte';
	import Button from '../ui/Button.svelte';
	import Icon from '../self/Desktop/Icon.svelte';

	interface Props {
		windowOpened?: boolean;
	}
	let { windowOpened = $bindable(false) }: Props = $props();
	let count = $state(0);

	let clickMessages: Record<string, string> = {
		10: 'This clicker lead nowhere',
		50: 'You clicked 50 times, are you ok ?',
		55: 'Can you like... Stop ?',
		60: 'Ok I got it you wont',
		80: 'Are you expecting an easter egg ?',
		85: 'Sorry no easter egg here',
		100: 'Ok just go on, I give up'
	};

	$effect(() => {
		if (clickMessages.hasOwnProperty(count.toString())) {
			setTimeout(() => {
				alert(clickMessages[count.toString()]);
			}, 0);
		}
	});
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
