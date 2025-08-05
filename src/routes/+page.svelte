<script>
	import Projects from "./sections/Projects.svelte";
	import Skills from "./sections/Skills.svelte";
  import HeroHeader from "./sections/HeroHeader.svelte";
	import { m } from "$lib/paraglide/messages";
	import Contact from "./sections/Contact.svelte";
	import Seo from "$lib/components/self/SEO.svelte";
	import Socials from "./sections/Socials.svelte";
</script>

<Seo title={m.title_homepage()} />

<HeroHeader/>
<main class="flex flex-col items-center text-center gap-32 w-[95%] lg:w-[80%] mx-auto">
  <Skills/>
  <Projects/>
  <Contact/>
  <Socials/>
</main>