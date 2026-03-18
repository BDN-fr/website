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

<Window bind:open title="About Me | Skills" class="p-2 flex flex-col">
	svelte, tailwind, react, python, lua, docker, mysql, js, github, html, git, vue, flask, fastapi, css, fivem <br>
	or something like that (WIP)
</Window>
