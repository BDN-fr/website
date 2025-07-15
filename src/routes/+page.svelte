<script>
	import Projects from "$lib/components/self/Projects.svelte";
	import Skills from "$lib/components/self/Skills.svelte";
  import HeroHeader from "$lib/components/self/HeroHeader.svelte";
	import { m } from "$lib/paraglide/messages";
</script>

<svelte:head>
	<title>{m.title_homepage()}</title>
  <meta property="og:title" content={m.title_homepage()} />
</svelte:head>

<HeroHeader/>
<section class="flex flex-col items-center text-center gap-8 w-[95%] lg:w-[80%] mx-auto">
  <Skills/>
  <Projects/>
</section>

<style>

</style>