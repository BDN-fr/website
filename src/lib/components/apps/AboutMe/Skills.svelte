<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Window from '$lib/components/ui/Window.svelte';

	let open = $state(false);
</script>

<Button
	onclick={() => {
		open = true;
	}}>Skills</Button
>

<Window bind:open title="About Me | Skills">WIP</Window>
