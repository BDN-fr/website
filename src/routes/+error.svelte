<script>
  import { page } from "$app/state";
  import { m } from '$lib/paraglide/messages';
</script>

<main class="flex flex-col items-center justify-center text-center">
  <h1 class="text-red-500 text-6xl">{page.status}</h1>
  <p>
    {m.error()}<br/>
    <a href="/">{m.error_homepage()}</a>
  </p>
</main>