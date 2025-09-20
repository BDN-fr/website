<script>
	import { m } from '$lib/paraglide/messages';
	import CardTilt from '$lib/components/ui/CardTilt.svelte';
</script>

<header
	id="hero-header"
	class="animate-fade-in flex h-svh flex-col items-center-safe justify-center-safe gap-5 p-5 text-center lg:flex-row"
>
	<div class="size-50">
		<CardTilt>
			<enhanced:img
				src="$lib/assets/images/profile.png"
				alt="My profile"
				class="halo z-10 size-full rounded"
				fetchpriority="high"
			/>
		</CardTilt>
	</div>
	<div class="lg:ml-16">
		<h1 class="text-7xl tracking-tighter">{m.hero_big()}</h1>
		<p>{m.hero_welcome()}</p>
	</div>
	<div class="absolute bottom-1 size-15">
		<!-- $lib/assets/icons/down.svg -->
		<svg class="fill-black dark:fill-white" viewBox="0 0 24.00 24.00">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"
			/>
		</svg>
	</div>
</header>
