<script>
	import { page } from '$app/state';
	import Button from '$lib/components/ui/Button.svelte';
	import Window from '$lib/components/ui/Window.svelte';
</script>

<Window
	title={'Error ' + page.status}
	open={true}
	isFullscreenable={false}
	isClosable={false}
	isResizable={false}
	class="flex flex-col p-4 gap-4"
>
	<div class="flex gap-2">
		<span class="icon-[pixel--times-circle] bg-red-500 text-5xl"></span>
		<h2>You encontered an error</h2>
	</div>
	<Button href="/" class="self-end">Return to the homepage</Button>
</Window>
