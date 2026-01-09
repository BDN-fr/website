<script lang="ts">
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

<div class="w-20 h-24 relative">
	<button
		class="group w-20 h-fit hover:bg-neutral/10 focus:bg-neutral/30 flex flex-col items-center justify-center absolute"
		ondblclick={click}
	>
		<div class="size-full grow *:size-18 flex justify-center items-center">
			{#if !children}
				<span class="icon-[pixel--giphy]"></span>
			{/if}
			{@render children?.()}
		</div>
		<h2 class="not-group-focus:truncate max-w-full shrink z-1 text-white text-shadow-shadow">
			{appName}
		</h2>
	</button>
</div>
