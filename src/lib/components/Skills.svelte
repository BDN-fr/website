<script>
	import { m } from "$lib/paraglide/messages";
	import { onMount } from "svelte";
	import ImagesScroll from "$lib/components/ImagesScroll.svelte";

  import javascript from "$lib/assets/icons/javascript.svg?enhanced";
  import python from "$lib/assets/icons/python.svg?enhanced";
  import html from "$lib/assets/icons/html.svg?enhanced";
  import mysql from "$lib/assets/icons/mysql.svg?enhanced";
  import git from "$lib/assets/icons/git.svg?enhanced";
  import npm from "$lib/assets/icons/npm.svg?enhanced";
  import pypi from "$lib/assets/icons/pypi.svg?enhanced";
  import fivem from "$lib/assets/icons/fivem.svg?enhanced";
  import css from "$lib/assets/icons/css.svg?enhanced";
  import nodejs from "$lib/assets/icons/nodejs.svg?enhanced";
  import lua from "$lib/assets/icons/lua.svg?enhanced";
  import svelte from "$lib/assets/icons/svelte.svg?enhanced";
  import react from "$lib/assets/icons/react.svg?enhanced";
  import flask from "$lib/assets/icons/flask.svg?enhanced";
  import nextjs from "$lib/assets/icons/nextjs.svg?enhanced";
  import tailwindcss from "$lib/assets/icons/tailwindcss.svg?enhanced";
  import express from "$lib/assets/icons/express.svg?enhanced";
  import github from "$lib/assets/icons/github.svg?enhanced";
  import vue from "$lib/assets/icons/vue.svg?enhanced";

  let images = [
    {
      src: javascript,
      alt: 'JavaScript'
    },
    {
      src: python,
      alt: 'Python',
      link: 'https://www.python.org/'
    },
    {
      src: html,
      alt: 'HTML'
    },
    {
      src: mysql,
      alt: 'MySQL'
    },
    {
      src: git,
      alt: 'git',
      link: 'https://git-scm.com/'
    },
    {
      src: npm,
      alt: 'npm',
      link: 'https://www.npmjs.com/'
    },
    {
      src: pypi,
      alt: 'PyPI',
      link: 'https://pypi.org/'
    },
    {
      src: fivem,
      alt: 'FiveM (cfxLua)',
      link: 'https://fivem.net/'
    },
    {
      src: css,
      alt: 'CSS'
    },
    {
      src: nodejs,
      alt: 'Node.js',
      link: 'https://nodejs.org/'
    },
    {
      src: lua,
      alt: 'Lua',
      link: 'https://www.lua.org/'
    },
    {
      src: svelte,
      alt: 'Svelte',
      link: 'https://svelte.dev/'
    },
    {
      src: react,
      alt: 'React',
      link: 'https://react.dev/'
    },
    {
      src: flask,
      alt: 'Flask',
      link: 'https://flask.palletsprojects.com/'
    },
    {
      src: nextjs,
      alt: 'Next.js',
      link: 'https://nextjs.org/'
    },
    {
      src: tailwindcss,
      alt: 'Tailwind CSS',
      link: 'https://tailwindcss.com/'
    },
    {
      src: express,
      alt: 'Express',
      link: 'https://expressjs.com/'
    },
    {
      src: github,
      alt: 'Github',
      link: 'https://github.com/'
    },
    {
      src: vue,
      alt: 'Vue',
      link: 'https://vuejs.org/'
    }
  ];


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