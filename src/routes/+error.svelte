<script>
  import { page } from "$app/state";
</script>

<main class="flex items-center justify-center text-center">
  <p>
    <b class="text-red-500">{page.status}</b> Error lol<br/>
    <a href="/">Go back to the homepage</a>
  </p>
</main>