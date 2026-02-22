<script>
	import Button from "$lib/components/ui/Button.svelte";
  import Window from "$lib/components/ui/Window.svelte";
  let open = $state(false)
</script>

<Button onclick={() => {open = true}}>Projects</Button>

<Window title="About Me | Projects" bind:open isFullscreenable={false} isResizable={false}>
  Ah yes projects
</Window>