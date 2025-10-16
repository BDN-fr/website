<script>
	import Projects from './sections/Projects.svelte';
	import Skills from './sections/Skills.svelte';
	import HeroHeader from './sections/HeroHeader.svelte';
	import { m } from '$lib/paraglide/messages';
	import Contact from './sections/Contact.svelte';
	import Seo from '$lib/components/self/SEO.svelte';
	import Socials from './sections/Socials.svelte';
	import AboutMe from './sections/AboutMe.svelte';
</script>

<Seo title={m.title_homepage()} />

<HeroHeader />
<main class="mx-auto flex w-[95%] flex-col items-center gap-32 text-center lg:w-[80%]">
	<AboutMe />
	<Skills />
	<Projects />
	<Contact />
	<Socials />
</main>
