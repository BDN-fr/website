<script>
	import Project from '$lib/components/self/Project.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Window from '$lib/components/ui/Window.svelte';
	import Link from '$lib/components/ui/Link.svelte';

	import lbxImg from '$lib/assets/LBX.svg?enhanced';
	import elleviaImg from '$lib/assets/ellevia.png?enhanced';
	let open = $state(false);
</script>

<Button
	onclick={() => {
		open = true;
		window.rybbit.event('About Me Projects window');
	}}>Projects</Button
>

<Window
	title="About Me | Projects"
	bind:open
	isFullscreenable={false}
	isResizable={false}
	class="flex gap-8 p-2 flex-wrap"
	widthClass="max-w-[500px] w-fit"
>
	<Project title="LBX RP" imageSrc={lbxImg} link="https://l.bdn-fr.xyz/lbxrp">
		LBX RP is a FiveM GTAV RP server, I work on it as a developper since march 2024. It's the only
		not open source project here, but some of the scripts I made are, like the <Link
			href="https://github.com/BDN-fr/BDN-housing">housing one</Link
		>.
	</Project>
	<Project title="Ellevia" imageSrc={elleviaImg} link="https://github.com/BDN-fr/ellevia">
		Was a cool frontend meant to replace <Link href="https://www.ilevia.fr">Illevia</Link>
		(transport service of the Lille in France), shutted down by them because I was using thier internal
		API. I might modify the backend to use GTFS, maybe one day.
	</Project>
	<div>
		I will <span class="text-xs text-shadow/50">maybe</span> add more projects later, you can still
		take a look at my <Link href="https://github.com/BDN-fr">Github</Link>
	</div>
</Window>
