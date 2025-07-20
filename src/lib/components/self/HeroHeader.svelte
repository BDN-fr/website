<script>
  import { m } from "$lib/paraglide/messages";
	import Halo from "../ui/Halo.svelte";
</script>

<header id="hero-header" class="flex items-center-safe justify-center-safe h-svh flex-col lg:flex-row gap-5 text-center p-5">
  <div class="size-50">
    <Halo>
      <enhanced:img src="$lib/assets/images/profile.png" alt="My profile" class="size-full rounded z-10" fetchpriority="high" />
    </Halo>
  </div>
  <div class="lg:ml-16">
    <h1 class="text-7xl">{m.hero_big()}</h1>
    <p>{m.hero_welcome()}</p>
    <p>{m.hero_scroll()}</p>
  </div>
</header>