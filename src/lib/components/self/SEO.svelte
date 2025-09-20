<script>
	import { m } from '$lib/paraglide/messages';
	let {
		title = 'BDN_fr',
		description = m.og_description(),
		image = '$lib/assets/images/profile.png'
	} = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
</svelte:head>
