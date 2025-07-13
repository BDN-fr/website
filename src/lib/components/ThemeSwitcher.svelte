<script>
  import { onMount } from 'svelte';

  let isDarkMode = false;

  onMount(() => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    isDarkMode = localStorage.getItem('theme') === 'dark' || (userPrefersDark && !localStorage.getItem('theme'));
    updateTheme();
  });

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateTheme();
  }

  function updateTheme() {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
</script>

<button onclick={toggleTheme} class="h-full" aria-label="Change theme">
  <enhanced:img src="$lib/assets/icons/moon.svg" alt="Switch to dark mode" class="dark:hidden h-full"/>
  <enhanced:img src="$lib/assets/icons/sun.svg" alt="Switch to light mode" class="not-dark:hidden h-full"/>
</button>