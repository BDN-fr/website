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
		100: 'Ok just go on, I give up',
		10000: "Fuck you, here's your easter egg. NO MORE CLICKING FOR YOU!"
	};

	$effect(() => {
		let c = count.toString();
		if (clickMessages.hasOwnProperty(c)) {
			setTimeout(() => {
				window.rybbit.event('Clicker ' + c);
				alert(clickMessages[c]);
				if (c == '10000') {
					windowOpened = false;
				}
			}, 0);
		}
	});
</script>

<Icon
	appName="Clicker"
	onOpen={() => {
		if (count >= 10000) return;
		windowOpened = true;
		window.rybbit.event('Clicker window');
	}}
>
	<span class="icon-[pixel--trending-solid]"></span>
</Icon>

<Window
	title={`Clicker | ${count}`}
	bind:open={windowOpened}
	class="flex flex-col gap-2 items-center justify-center p-8 px-16"
	widthClass="w-fit"
	isResizable={false}
	isFullscreenable={false}
>
	<Button onclick={() => (count += 1)}>Click</Button>
</Window>
