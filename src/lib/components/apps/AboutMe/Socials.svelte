<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Window from '$lib/components/ui/Window.svelte';

	let open = $state(false);
</script>

<Button
	onclick={() => {
		open = true;
	}}>Socials</Button
>

<Window bind:open title="About Me | Socials">WIP</Window>
