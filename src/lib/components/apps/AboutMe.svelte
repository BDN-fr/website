<script lang="ts">
	import Icon from '../self/Desktop/Icon.svelte';
	import Window from '../ui/Window.svelte';

	interface Props {
		windowOpened?: boolean;
	}
	let { windowOpened = $bindable(false) }: Props = $props();
</script>

<Icon
	appName="About Me"
	onOpen={() => {
		windowOpened = true;
	}}
>
	<span class="icon-[pixel--user-solid]"></span>
</Icon>

<Window title="About Me" bind:open={windowOpened}>caca</Window>
