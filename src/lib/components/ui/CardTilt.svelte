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

<!-- <script lang="ts">
  import { scaleLinear } from 'd3-scale';

  let {children} = $props();

  let container: HTMLDivElement
  let item: HTMLDivElement

  let maxRotation = 30

  let containerHeight = $state(0)
  let containerWidth = $state(0)

	let rotateX = $state(0);
	let rotateY = $state(0);

  function scaleX(mouseX: number) {
    return scaleLinear()
      .domain([0, containerHeight])
      .range([-maxRotation, maxRotation])(mouseX);
  }

  function scaleY(mouseY: number) {
    return scaleLinear()
      .domain([0, containerWidth])
      .range([maxRotation, -maxRotation])(mouseY);
  }


  function onMouseMove(e: MouseEvent) {
    const mouseX = e.offsetX
		const mouseY = e.offsetY

    let { top, left, width, height } = container.getBoundingClientRect();
    containerWidth = width
    containerHeight = height

    rotateY = scaleY(mouseX)
		rotateX = scaleX(mouseY)
  }

  function onMouseLeave() {
    rotateX = 0;
		rotateY = 0;
  }

  $effect(() => {
    item.style = `--tw-rotate-y: rotateY(${rotateY}deg); --tw-rotate-x: rotateX(${rotateX}deg);`
  })
</script>

<div
  bind:this={container}
  class="hover:scale-125 container"
  onmousemove={onMouseMove}
  onmouseleave={onMouseLeave}
  role="contentinfo"
>
  <div bind:this={item} class="hover:transform item">
    {@render children?.()}
  </div>
</div>

<style>
  .container {
    perspective: 600px;
  }
  .container, .item {
    transition: all 250ms ease-out;
  }
</style> -->