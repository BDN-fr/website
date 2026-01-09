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
	class="flex justify-center items-center p-4 gap-4"
>
	<span class="icon-[pixel--times-circle] bg-red-500 text-5xl"></span>
	<div class="flex flex-col justify-center items-center gap-2">
		You encontered an error
		<Button href="/">Return to the homepage</Button>
	</div>
</Window>
