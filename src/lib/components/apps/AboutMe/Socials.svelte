<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Link from '$lib/components/ui/Link.svelte';
	import Window from '$lib/components/ui/Window.svelte';

	let open = $state(false);
</script>

<Button
	onclick={() => {
		open = true;
		window.rybbit.event('About Me Socials window');
	}}>Socials</Button
>

{#snippet social(icon: string, link: string, name: string)}
	<div>
		<Link href={link} class="flex flex-col w-fit h-fit justify-center items-center"
			><span class="{icon} size-8"></span> {name}</Link
		>
	</div>
{/snippet}

<Window
	bind:open
	title="About Me | Socials"
	class="p-2 flex flex-col gap-4"
	widthClass="w-fit min-w-fit"
>
	<div class="flex gap-4 w-fit">
		{@render social('icon-[pixel--github]', 'https://github.com/BDN-fr', 'github')}
		{@render social(
			'icon-[pixel--discord]',
			'https://discord.com/users/704593833421438996',
			'discord'
		)}
		{@render social('icon-[pixel--envelope]', 'mailto:contact@bdn-fr.xyz', 'mail')}
	</div>
	WIP
</Window>
