<script lang="ts">
	import { onMount, untrack } from 'svelte';
	import { topWindow, count } from '$lib/stores/TopWindow';
	import { isMobile } from '$lib/stores/IsMobile';

	interface Props {
		title: string;
		open: boolean;
		widthClass?: string;
		heightClass?: string;
		isFullscreenable?: boolean;
		isClosable?: boolean;
		isResizable?: boolean;
		children?: import('svelte').Snippet;
		class?: string;
	}
	let {
		title,
		open = $bindable(true),
		widthClass = 'min-w-40 w-fit',
		heightClass = 'min-h-25 h-fit',
		isFullscreenable = true,
		isClosable = true,
		isResizable = true,
		children,
		class: className,
		...rest
	}: Props = $props();

	let uid = $props.id();

	let yDiff = 0;
	let xDiff = 0;
	let scrollY = $state(0);
	let scrollX = $state(0);
	let mouseY = $state(0);
	let mouseX = $state(0);
	let top = $derived(mouseY - yDiff + scrollY);
	let left = $derived(mouseX - xDiff + scrollX);
	top = 25;
	left = 25;
	let drag = $state(false);
	let isFullscreen = $state(false);

	if ($isMobile) {
		isFullscreen = true;
		isFullscreenable = false;
		isResizable = false;
		top = 0;
		left = 0;
	}

	let element: HTMLDivElement | undefined = $state();

	onMount(() => {
		$effect(() => {
			if (open) {
				untrack(() => topWindow.set(uid));
			}
		});
		$effect(() => {
			if (element) {
				if (isFullscreen) {
					element.style.top = '0px';
					element.style.left = '0px';
				} else {
					element.style.top = top + 'px';
					element.style.left = left + 'px';
				}
			}
		});

		const unsubscribe = topWindow.subscribe((value) => {
			if (element) {
				if (value === uid) {
					element.style.zIndex = '' + $count;
				}
			}
		});

		return () => {
			unsubscribe();
		};
	});

	function mouseDown(event: MouseEvent) {
		if (isFullscreen) return;
		if (!element) return;
		drag = true;
		var rect = element.getBoundingClientRect();
		yDiff = event.y - rect.y;
		xDiff = event.x - rect.x;
	}

	function move(event: MouseEvent) {
		if (!drag) return;
		mouseY = event.y;
		mouseX = event.x;
	}

	function scroll(event: UIEvent) {
		if (!drag) return;
		scrollY = window.scrollY;
		scrollX = window.scrollX;
	}

	function fullscreen() {
		if (!isFullscreenable) return;
		isFullscreen = !isFullscreen;
	}

	function close() {
		if (!isClosable) return;
		open = false;
	}
</script>

<svelte:window
	onmousemove={move}
	onmouseup={() => {
		drag = false;
	}}
	onscroll={scroll}
/>

{#if open}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		bind:this={element}
		class={['fixed shadow-shadow/50 shadow-xl']}
		onmousedown={() => {
			topWindow.set(uid);
		}}
	>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			onmousedown={mouseDown}
			class="absolute bg-accent text-accent-content flex items-center px-2 gap-2 select-none w-full h-(--titlebar-height)"
		>
			<span class="grow truncate">{title}</span>
			{#if isFullscreenable}
				<button
					aria-label="fullscreen"
					class="icon-[pixel--expand] text-accent-content hover:text-white scale-90 shrink-0"
					onclick={fullscreen}
				></button>
			{/if}
			{#if isClosable}
				<button
					aria-label="close"
					class="icon-[pixel--window-close] text-accent-content hover:text-red-500 shrink-0"
					onclick={close}
				></button>
			{/if}
		</div>
		<div class="h-(--titlebar-height) bg-accent w-full"></div>
		<div
			class={[
				'bg-neutral text-neutral-content w-[calc(100lvw-50px)] max-h-[calc(calc(100lvh-var(--titlebar-height))-50px)] overflow-auto',
				isResizable && !isFullscreen ? 'resize' : '',
				isFullscreen ? 'min-w-lvw' : widthClass,
				isFullscreen ? 'min-h-[calc(100lvh-var(--titlebar-height))]' : heightClass,
				className
			]}
			{...rest}
		>
			{@render children?.()}
		</div>
		<!-- TODO: Allow resising with all edges -->
		<!-- <div class="absolute bg-red-500 w-[4px] top-0 h-full -left-[2px] cursor-w-resize"></div>
		<div class="absolute bg-red-500 w-[4px] top-0 h-full -right-[2px] cursor-e-resize"></div>
		<div class="absolute bg-red-500 h-[4px] -top-[2px] w-full left-0 cursor-n-resize"></div>
		<div class="absolute bg-red-500 h-[4px] -bottom-[2px] w-full left-0 cursor-s-resize"></div> -->
	</div>
{/if}
