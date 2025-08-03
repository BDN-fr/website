<script lang="ts">
  let {children} = $props();

  let container: HTMLDivElement
  let child: HTMLDivElement
  let x = $state(0)
  let y = $state(0)

  function onMouseMove(e: MouseEvent) {
    if (!container) return;
    const { left, top, width, height } = container.getBoundingClientRect();
    x = (e.clientX - left - width / 2) / 4;
		y = (e.clientY - top - height / 2) / 4;
  }

  function onMouseLeave() {
    x = 0
    y = 0
  }

  $effect(() => {
    child.style = `--tw-rotate-y: rotateY(${-x}deg); --tw-rotate-x: rotateX(${y}deg);`
  })
</script>

<div
  bind:this={container}
  class="hover:scale-125 active:scale-125 container"
  onmousemove={onMouseMove}
  onmouseleave={onMouseLeave}
  role="contentinfo"
>
  <div bind:this={child} class="transform child">
    {@render children?.()}
  </div>
</div>

<style>
  .container {
    perspective: 600px;
  }
  .container, .child {
    transition: all 250ms ease-out;
  }
</style>