<script>
  import { m } from "$lib/paraglide/messages";
	import Subsection from "$lib/components/ui/Subsection.svelte";
  import elleviaLogo from "$lib/assets/images/ellevia.png?enhanced"

  /**
	 * @param {string} link
	 */
  function openLink(link) {
    window.open(link, '_blank')
  }

  let projects = [
    {
      name: m.project_portfolio_title(),
      logo: null,
      link: "https://bdn-fr.xyz/",
      tags: ['Sveltekit', 'Tailwind CSS', 'HTML', 'JS', 'CSS'],
      desc: m.project_portfolio_desc()
    },
    {
      name: "Ellevia",
      logo: elleviaLogo,
      link: "https://ellevia.bdn-fr.xyz/",
      tags: ['Sveltekit', 'Tailwind CSS', 'HTML', 'JS', 'CSS', 'Typescript', 'API'],
      desc: m.project_ellevia_desc()
    },
    {
      name: "Simple Web Proxy",
      logo: null,
      link: "https://github.com/BDN-fr/simple-web-proxy/",
      tags: ['HTML', 'CSS', 'JS', 'Service Worker', 'Python', 'Flask'],
      desc: m.project_proxy_desc()
    }
  ];
</script>

{#snippet project(/** @type {string} */ name, /** @type {any} */ logo, /** @type {string|null} */ link, /** @type {string[]} */ tags, /** @type {string} */ desc)}
  <div class="text-left transition duration-500 hover:lg:-translate-y-3 group">
    <Subsection title={name} titleClass="hidden" paddingClass="p-4 {!logo ? 'pt-0' : ''}">
      <div class="min-h-25 flex items-center">
        {#if logo}
          <enhanced:img src={logo} alt={name} class="h-20 min-w-20 w-20" />
        {/if}
        <div class="{logo ? 'ml-4' : ''}">
          <h2 class="text-4xl">{name}</h2>
          {#if tags}
            <div class="flex flex-wrap gap-1 mt-1">
              {#each tags as tag}
                <span class="px-2 text-white bg-black rounded-full">{tag}</span>
              {/each}
            </div>
          {/if}
        </div>
      </div>
      <p class="whitespace-pre-line text-pretty">{desc.replaceAll('%nl%', '\n')}</p>
      {#if link}
        <a
          class="h-12 w-full bg-black hover:halo halo-blur-50 text-white rounded-full mt-4 flex 2xl:hidden group-hover:2xl:flex items-center justify-center gap-2 transition duration-300"
          href={link}
        >
          <enhanced:img src="$lib/assets/icons/open.svg" alt={m.open_link()} class="h-6/10 w-auto" />
          {m.open_link()}
        </a>
      {/if}
    </Subsection>
  </div>
{/snippet}

<Subsection title={m.projects_title()} paddingClass="pb-4">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
    {#each projects as p}
      {@render project(p.name, p.logo, p.link, p.tags, p.desc)}
    {/each}
  </div>
  {m.project_more_soon()}
</Subsection>