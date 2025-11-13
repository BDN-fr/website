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
      {m.about_me_desc({age:age})}
    </p>
  </div>
</Subsection>