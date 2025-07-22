<script>
  import { m } from "$lib/paraglide/messages";
	import Subsection from "../ui/Subsection.svelte";

  import pfp from "$lib/assets/images/profile.png?enhanced"

  /**
	 * @param {string} link
	 */
  function openLink(link) {
    window.open(link, '_blank')
  }
</script>

{#snippet project(/** @type {string} */ name, /** @type {any} */ logo, /** @type {string|null} */ link, /** @type {string[]} */ tags, /** @type {string} */ desc)}
  <div class="text-left transition duration-500 hover:lg:-translate-y-3 group">
    <Subsection title={name} titleClass="hidden" paddingClass="p-4 {!logo ? 'pt-0' : ''}">
      <div class="min-h-25 flex items-center">
        {#if logo}
          <enhanced:img src={logo} alt={name} class="rounded h-25 min-w-25 w-25" />
        {/if}
        <div class="{logo ? 'ml-4' : ''}">
          <h2 class="text-5xl">{name}</h2>
          {#if tags}
            <div class="flex flex-wrap gap-1 mt-4">
              {#each tags as tag}
                <span class="px-2 text-white bg-black rounded-full">{tag}</span>
              {/each}
            </div>
          {/if}
        </div>
      </div>
      <p>{desc}</p>
      {#if link}
        <button
          class="h-12 w-full bg-black hover:halo halo-blur-50 text-white rounded-full mt-4 flex 2xl:hidden group-hover:2xl:flex items-center justify-center gap-2 transition duration-300"
          onclick={() => openLink(link)}
        >
          <enhanced:img src="$lib/assets/icons/open.svg" alt={m.open_link()} class="h-6/10 w-auto" />
          {m.open_link()}
        </button>
      {/if}
    </Subsection>
  </div>
{/snippet}

<Subsection title={m.projects_title()} paddingClass="pb-4">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
    {@render project('Long test title because I test things', pfp, 'https://bdn-fr.xyz/', ['Svelte', 'Tailwind CSS', 'HTML', 'JS', 'CSS'], "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias itaque soluta placeat, culpa nostrum dolor laboriosam, eius illo aliquam, laborum necessitatibus fugit quidem consequuntur similique suscipit. Dignissimos quidem officiis explicabo?")}
    {@render project('Test 2', null, 'https://bdn-fr.xyz/', ['NextJS', 'HTML', 'JS', 'CSS'], "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem accusantium enim incidunt, sed culpa pariatur inventore cupiditate ipsum dolorum, adipisci facere eum sequi? Ipsam a asperiores esse qui debitis.")}
  </div>
</Subsection>