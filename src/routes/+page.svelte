<script>
	import Skills from "$lib/components/Skills.svelte";
</script>

<main>
  <section id="hero-header" class="flex items-center-safe justify-center-safe h-svh flex-col lg:flex-row gap-5 text-center p-5">
    <img src="/images/profile.png" alt="My profile" class="h-50 rounded border-white border-2 border-solid"/>
    <div>
      <h1 class="text-7xl">Hello world&nbsp!</h1>
      <p>Welcome to my awesome website !</p>
      <p>(scroll down)</p>
    </div>
  </section>
  <section id="main" class="flex justify-center text-center">
    <Skills/>
  </section>
</main>

<style>

</style>