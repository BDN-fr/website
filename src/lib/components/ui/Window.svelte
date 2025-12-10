<script lang="ts">
  interface Props {
		title: string;
		children?: import('svelte').Snippet;
		class?: string;
	}
	let { title, children, class: className, ...rest }: Props = $props();

  let yDiff = 0
  let xDiff = 0
  let scrollY = $state(0)
  let scrollX = $state(0)
  let mouseY = $state(0)
  let mouseX = $state(0)
  let top = $derived(mouseY - yDiff + scrollY)
  let left = $derived(mouseX - xDiff + scrollX)
  top = 100
  left = 100
  let drag = $state(false)

  let element: HTMLDivElement

  function mouseDown(event:MouseEvent) {
    drag = true
    var rect = element.getBoundingClientRect()
    yDiff = event.y - rect.y
    xDiff = event.x - rect.x
  }

  function move(event:MouseEvent) {
    if (!drag) return
    mouseY = event.y
    mouseX = event.x
  }

  function scroll(event:UIEvent) {
    if (!drag) return
    scrollY = window.scrollY
    scrollX = window.scrollX
  }
</script>

<svelte:window onmousemove={move} onmouseup={() => drag = false} onscroll={scroll} />

<div bind:this={element} class="absolute size-fit shadow-shadow/50 shadow-xl" style={`left:${left}px; top:${top}px;`}>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div onmousedown={mouseDown} class="bg-titlebar text-titlebar-content flex items-center px-2 gap-2 select-none">
		<span class="grow truncate">{title}</span>
    <span class="icon-[pixel--expand] text-titlebar-content hover:text-white scale-90 shrink-0"></span>
		<span class="icon-[pixel--window-close] text-titlebar-content hover:text-red-500 shrink-0"></span>
	</div>
	<div class={['bg-neutral text-neutral-content min-w-full min-h-25 size-max resize overflow-auto', className]} {...rest}>
		{@render children?.()}
	</div>
</div>
