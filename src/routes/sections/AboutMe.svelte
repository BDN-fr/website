<script lang="ts">
	import Link from "$lib/components/ui/Link.svelte";
	import Subsection from "$lib/components/ui/Subsection.svelte";
	import { m } from "$lib/paraglide/messages";

  let dob = new Date('03/10/2008')
  let today = new Date()
  let age = new Date(today.getTime() - dob.getTime()).getFullYear() - new Date(0).getFullYear()
</script>

<Subsection title={m.about_me()}>
  <div class="flex justify-center md:w-2/3 mx-auto">
    <p class="text-left">
      I'm a {age} yo transgender 🏳️‍⚧️ non-binary girl nerd who likes eating graphic cards and play video games.
      My pronoums are she / her.
      I live in France in the Nord, I'm in terminale (12th grade in the country of guns and eagles) with Maths and Computer class in specialites.
      I learnt developpement by myself starting with python at the age of 12 (not sure tbh xD).
      I really don't like Javascript but (of course) like Python.
      I prefer backend but have no problem doing frontend.
      I self-host my website and services with a VPS (which I pay like 5€/month) and <Link href="https://dokploy.com/">Dokploy</Link>.
    </p>
  </div>
</Subsection>