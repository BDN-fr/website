<script lang="ts">
	import axios from 'axios';
	import Icon from '../../self/Desktop/Icon.svelte';
	import Window from '../../ui/Window.svelte';
	import { onMount } from 'svelte';
	import Projects from './Projects.svelte';
	import Skills from './Skills.svelte';
	import Socials from './Socials.svelte';

	interface Props {
		windowOpened?: boolean;
	}
	let { windowOpened = $bindable(false) }: Props = $props();
	var bday = new Date('03/10/2008'); // You looked in the source code and foud my birth day, cool or... creepy
	var today = new Date();
	let age = new Date(today.getTime() - bday.getTime()).getFullYear() - new Date(0).getFullYear();
	let discord: DiscordUser | undefined = $state();

	onMount(() => {
		axios
			.get('/api/discord')
			.then((res) => {
				discord = res.data.user;
			})
			.catch((reason) => {
				console.error(reason);
			});
	});
</script>

<Icon
	appName="About Me"
	onOpen={() => {
		windowOpened = true;
	}}
>
	<span class="icon-[pixel--user-solid]"></span>
</Icon>

<Window
	title="About Me"
	bind:open={windowOpened}
	isFullscreenable={true}
	widthClass="min-w-[500px] w-fit"
	class="p-2 flex flex-col gap-2"
>
	<div class="flex gap-4">
		{#if discord}
			<div class="relative flex items-center flex-col">
				<div class="size-[144px] flex items-center justify-center">
					<img
						src={`https://cdn.discordapp.com/avatars/${discord.id}/${discord.avatar}?size=128'`}
						alt="Avatar"
						class="rounded-full absolute size-[120px] shadow shadow-shadow"
					/>
					{#if discord.avatar_decoration_data}
						<img
							src={`https://cdn.discordapp.com/avatar-decoration-presets/${discord.avatar_decoration_data.asset}.png?size=128&passthrough=true`}
							alt="Avatar decoration"
							class="absolute"
						/>
					{/if}
				</div>
			</div>
		{/if}
		<div class={['flex flex-col gap-2', discord ? 'pt-4' : '']}>
			<div class="flex gap-2 items-center h-fit w-full">
				{#if discord}
					<span class="icon-[pixel--discord]"></span>
				{/if}
				<span class="text-2xl">{discord?.global_name || 'BDN_fr'}</span>
				<span class="text-shadow/50 place-self-end"
					>{discord?.username || "Couldn't load data from discord"}</span
				>
				{#if discord?.primary_guild}
					<div
						class="ml-2 px-2 rounded-md inline-flex items-center gap-1.5 shadow shadow-shadow h-8/10"
					>
						<img
							src={`https://cdn.discordapp.com/clan-badges/${discord.primary_guild.identity_guild_id}/${discord.primary_guild.badge}.webp?size=16`}
							alt="Tag badge"
							class="size-[16px]"
						/>
						<span>{discord.primary_guild.tag}</span>
					</div>
				{/if}
			</div>
			<p>
				I'm a {age} years old french girl. I like internet, coding, video games and uhh... more things
				but idk
			</p>
			<div class="flex gap-2">
				<Projects />
				<Skills />
				<Socials />
			</div>
		</div>
	</div>
</Window>
