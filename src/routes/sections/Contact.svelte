<script>
	import { m } from "$lib/paraglide/messages";
	import Link from "$lib/components/ui/Link.svelte";
  import Subsection from "$lib/components/ui/Subsection.svelte";
</script>

<Subsection title={m.contact_title()}>
  <p>{m.contact_1()}<Link href="mailto:contact@bdn-fr.xyz" principal={true}>email</Link>{m.contact_2()}<Link href="https://discord.com/users/704593833421438996" principal={true}>Discord</Link> (bdn_fr)</p>
</Subsection>