<script>
  import { m } from "$lib/paraglide/messages";
	import Autoplay from "embla-carousel-autoplay";
	import Subsection from "../ui/Subsection.svelte";
  import emblaCarouselSvelte from 'embla-carousel-svelte'
	import AutoHeight from "embla-carousel-auto-height";

  let emblaApi
  let autoplay = Autoplay({
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true
  })
  let autoHeight = AutoHeight()

  let options = {
    loop:true
  }
  let plugins = [
    autoplay,
    autoHeight
  ]

  let timer = $state("")

  // @ts-ignore
  function onInit(event) {
    emblaApi = event.detail
    setInterval(() => {
      if (autoplay.isPlaying() && typeof(autoplay.timeUntilNext()) == "number") {
        // @ts-ignore
        timer = (autoplay.timeUntilNext() / 1000).toFixed(2).toString()+'s'
      } else {
        timer = m.timer_paused()
      }
    }, 10)
  }
</script>

<Subsection title={m.projects_title()} paddingClass="pb-4">
  <div
    use:emblaCarouselSvelte={{ options, plugins }}
    onemblaInit="{onInit}"
    class="overflow-hidden cursor-grab active:cursor-grabbing select-none"
  >
    <div class="flex mx-4 items-start">
      <div class="project">
        <Subsection title="Test" titleClass="text-2xl">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugit consequatur, neque et, natus itaque deserunt ea libero quibusdam dolorem quae officia odit recusandae nesciunt praesentium quidem aliquid veniam amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error explicabo qui aut enim nostrum, voluptates libero exercitationem dolore pariatur esse voluptas expedita, optio provident animi illo culpa. Et, rerum nisi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia harum asperiores doloribus quis quod, omnis tempora suscipit ipsa officiis unde eveniet autem rem voluptatum voluptate eius doloremque. Reprehenderit, doloremque ex.</p>
          <Subsection title="Another subsubsubsection" titleClass="text-xl">
            <p>Some text</p>
            <Subsection title="Another subsubsubsubsection" titleClass="">
              <p>More text lol</p>
            </Subsection>
          </Subsection>
        </Subsection>
      </div>
      <div class="project">
        <Subsection title="Test 2" titleClass="text-2xl">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi autem voluptates totam tenetur at, facere deserunt dolorum quos, commodi, quod dolor nihil voluptatibus. Possimus excepturi fugit ipsum itaque vero.</p>
          <Subsection title="Another subsubsubsection" titleClass="text-xl">
            <p>Some text</p>
            <div class="flex flex-col gap-1">
              <Subsection title="Another subsubsubsubsection" titleClass="">
                <p>More text lol</p>
              </Subsection>
              <Subsection title="Yet another subsubsubsubsection" titleClass="">
                <p>lot of text huh</p>
              </Subsection>
            </div>
          </Subsection>
        </Subsection>
      </div>
    </div>
  </div>
  {timer}
</Subsection>

<style>
  @reference "tailwindcss";

  .project {
    @apply basis-auto grow-0 shrink-0 w-full mx-4;
  }
</style>