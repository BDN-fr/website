<script>
	import { m } from '$lib/paraglide/messages';
	import Link from '$lib/components/ui/Link.svelte';
	import Subsection from '$lib/components/ui/Subsection.svelte';
</script>

<Subsection title={m.socials_title()}>
	<div class="flex flex-col">
		<span class="text-2xl">{m.WIP()}</span>
		<Link href="https://github.com/BDN-fr">github</Link>
		<Link href="https://discord.com/users/704593833421438996">discord (bdn_fr)</Link>
		<Link href="https://steamcommunity.com/id/BDN_fr">steam</Link>
		<Link href="https://www.instagram.com/bdn_fr">instagram</Link>
		<Link href="https://youtube.com/@modo_discord">youtube</Link>
		<Link href="https://twitch.tv/BDN_fr">twitch</Link>
	</div>
</Subsection>
