<script>
	import '../app.css';
  import ThemeSwitcher from '$lib/components/theme-switcher.svelte';

	let { children } = $props();
</script>

<div class="bg-neutral-300 dark:bg-neutral-800 text-black dark:text-white">
  <nav class="flex items-center h-[5vh] absolute mx-auto px-4 top-2 left-0 right-0 w-2/3 bg-neutral-500/70 rounded-[25px] backdrop-blur-md gap-2">
    <p>More content soon :)</p>
    <div class="absolute right-4 h-[80%]">
      <ThemeSwitcher/>
    </div>
  </nav>

  {@render children()}

  <footer></footer>
</div>