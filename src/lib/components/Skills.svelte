<script>
	import { m } from "$lib/paraglide/messages";
	import { onMount } from "svelte";
	import ImagesScroll from "./ImagesScroll.svelte";
  
  let images = [
    {
      src:'/icons/javascript.svg',
      alt:'JavaScript'
    },
    {
      src:'/icons/python.svg',
      alt:'Python',
      link:'https://www.python.org/'
    },
    {
      src:'/icons/html.svg',
      alt:'HTML'
    },
    {
      src:'/icons/mysql.svg',
      alt:'MySQL'
    },
    {
      src:'/icons/git.svg',
      alt:'git',
      link:'https://git-scm.com/'
    },
    {
      src:'/icons/npm.svg',
      alt:'npm',
      link:'https://www.npmjs.com/'
    },
    {
      src:'/icons/pypi.svg',
      alt:'PyPI',
      link:'https://pypi.org/'
    },
    {
      src:'/icons/fivem.png',
      alt:'FiveM (cfxLua)',
      link:'https://fivem.net/'
    },
    {
      src:'/icons/css.svg',
      alt:'CSS'
    },
    {
      src:'/icons/nodejs.svg',
      alt:'Node.js',
      link:'https://nodejs.org/'
    },
    {
      src:'/icons/lua.svg',
      alt:'Lua',
      link:'https://www.lua.org/'
    },
    {
      src:'/icons/svelte.svg',
      alt:'Svelte',
      link:'https://svelte.dev/'
    },
    {
      src:'/icons/react.svg',
      alt:'React',
      link:'https://react.dev/'
    },
    {
      src:'/icons/flask.svg',
      alt:'Flask',
      link:'https://flask.palletsprojects.com/'
    },
    {
      src:'/icons/nextjs.svg',
      alt:'Next.js',
      link:'https://nextjs.org/'
    },
    {
      src:'/icons/tailwindcss.svg',
      alt:'Tailwind CSS',
      link:'https://tailwindcss.com/'
    },
    {
      src:'/icons/express.svg',
      alt:'Express',
      link:'https://expressjs.com/'
    },
    {
      src:'/icons/github.svg',
      alt:'Github',
      link:'https://github.com/'
    },
    {
      src:'/icons/vue.svg',
      alt:'Vue',
      link:'https://vuejs.org/'
    }
  ]

  // @ts-ignore
  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  onMount(() => {
    images = shuffleArray(images)
  })
</script>

<div id="skills" class="lg:w-fit lg:max-w-[80vw] w-full bg-neutral-300 dark:bg-neutral-700 lg:rounded-[25px] pb-4">
  <h1 class="text-3xl">{m.skills_title()}</h1>
  <ImagesScroll images={images} />
</div>