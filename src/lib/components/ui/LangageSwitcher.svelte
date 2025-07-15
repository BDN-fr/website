<script>
  import { setLocale, getLocale } from '$lib/paraglide/runtime';
  import { m } from '$lib/paraglide/messages';
</script>

<div>
  {#if getLocale() === "en"}
    <button onclick={() => setLocale('fr')}>{m.switch()}</button>
  {:else}
    <button onclick={() => setLocale('en')}>{m.switch()}</button>
  {/if}
</div>