<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Window from '$lib/components/ui/Window.svelte';

	let open = $state(false);
</script>

<Button
	onclick={() => {
		open = true;
		window.rybbit.event('About Me Skills window');
	}}>Skills</Button
>

<Window bind:open title="About Me | Skills" class="p-2 flex flex-col">
	<span
		>svelte, tailwind, react, python, lua, docker, mysql, js, github, html, git, flask, fastapi,
		css, fivem</span
	>
	<span>or something like that (WIP)</span>
</Window>
