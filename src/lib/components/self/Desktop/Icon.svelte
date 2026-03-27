<script lang="ts">
	import { isMobile } from '$lib/stores/IsMobile';
	import type { Snippet } from 'svelte';

	interface Props {
		appName: string;
		onOpen: CallableFunction;
		children?: Snippet;
	}
	let { appName, onOpen, children }: Props = $props();

	function click(e: MouseEvent) {
		e.preventDefault();
		onOpen();
	}
</script>

<div class={['relative', $isMobile ? 'w-18 h-24' : 'w-24 h-18']}>
	<button
		class="group w-full h-fit hover:bg-shadow/10 focus:bg-shadow/20 flex flex-col items-center justify-center absolute"
		onclick={(e) => $isMobile && click(e)}
		ondblclick={(e) => !$isMobile && click(e)}
	>
		<div class="size-full grow *:size-14 flex justify-center items-center">
			{#if !children}
				<span class="icon-[pixel--giphy]"></span>
			{/if}
			{@render children?.()}
		</div>
		<h2
			class="not-group-focus:truncate max-w-full shrink z-1 text-white select-none text-outline-shadow"
		>
			{appName}
		</h2>
	</button>
</div>
