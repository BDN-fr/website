<script>
	import Projects from "$lib/components/self/Projects.svelte";
	import Skills from "$lib/components/self/Skills.svelte";
  import HeroHeader from "$lib/components/self/HeroHeader.svelte";
	import { m } from "$lib/paraglide/messages";
	import Contact from "$lib/components/self/Contact.svelte";
	import Navbar from "$lib/components/self/Navbar.svelte";
	import Seo from "$lib/components/self/SEO.svelte";
	import Socials from "$lib/components/self/Socials.svelte";
</script>

<Seo title={m.title_homepage()} />

<Navbar/>
<HeroHeader/>
<section class="flex flex-col items-center text-center gap-48 w-[95%] lg:w-[80%] mx-auto">
  <Skills/>
  <Projects/>
  <Contact/>
  <Socials/>
</section>