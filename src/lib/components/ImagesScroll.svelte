<script>
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import AutoScroll from 'embla-carousel-auto-scroll'

  let { images } = $props()

  let options = {
      loop: true,
      dragFree: true
    }
  let plugins = [AutoScroll({
      speed: 1,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
      startDelay:0
    })]
</script>

<div use:emblaCarouselSvelte="{{ options, plugins }}" class="overflow-hidden">
  <div class="flex">
    {#each images as image}
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <img
      src={image.src}
      alt={image.alt}
      title={image.alt}
      class="basis-auto grow-0 shrink-0 h-30 w-30 p-3 {image.link ? 'hover:cursor-pointer' : ''}"
      loading="lazy"
      onclick={image.link ? () => {window.open(image.link)} : null}
      />
    {/each}
  </div>
</div>