<script>
	import Skills from "$lib/components/Skills.svelte";
	import { m } from "$lib/paraglide/messages";
</script>

<main>
  <section id="hero-header" class="flex items-center-safe justify-center-safe h-svh flex-col lg:flex-row gap-5 text-center p-5">
    <img src="/images/profile.png" alt="My profile" class="h-50 rounded border-white border-2 border-solid"/>
    <div>
      <h1 class="text-7xl">{m.hero_big()}</h1>
      <p>{m.hero_welcome()}</p>
      <p>{m.hero_scroll()}</p>
    </div>
  </section>
  <section id="main" class="flex justify-center text-center">
    <Skills/>
  </section>
</main>

<style>

</style>