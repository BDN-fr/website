<script>
	import { m } from "$lib/paraglide/messages";
	import Link from "../ui/Link.svelte";
</script>

<footer class="dark w-full min-h-60 text-white bg-black mt-48 flex flex-col items-center justify-center">
  <h1 class="text-xl">{m.WIP()} <span class="text-xs">{m.footer_forever()}</span></h1>
  <Link href="http://github.com/BDN-fr/website/">{m.source_code()}</Link>
  <Link href="/noskid.png">{m.not_a_skid()}</Link>
  <p class="text-xs">{m.cookies_message()}</p>
</footer>