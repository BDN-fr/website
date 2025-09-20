<script>
	import { m } from '$lib/paraglide/messages';
	import Link from '../ui/Link.svelte';
</script>

<footer
	class="dark mt-48 flex min-h-60 w-full flex-col items-center justify-center bg-black text-white"
>
	<h1 class="text-xl">{m.WIP()} <span class="text-xs">{m.footer_forever()}</span></h1>
	<Link href="http://github.com/BDN-fr/website/">{m.source_code()}</Link>
	<Link href="/noskid.png">{m.not_a_skid()}</Link>
	<p class="text-xs">{m.cookies_message()}</p>
</footer>
