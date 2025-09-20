<script>
	import { page } from '$app/state';
	import Link from '$lib/components/ui/Link.svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<main class="flex flex-col items-center justify-center text-center">
	<h1 class="text-6xl text-red-500">{page.status}</h1>
	<p>
		{m.error()}<br />
		<Link href="/" principal={true}>{m.error_homepage()}</Link>
	</p>
</main>
