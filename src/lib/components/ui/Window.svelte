<script lang="ts">
	import { onMount } from 'svelte';
	import { topWindow } from '$lib/stores/TopWindow';

	interface Props {
		title: string;
		open: boolean;
		minWidthClass?: string;
		minHeightClass?: string;
		maxWidthClass?: string;
		maxHeightClass?: string;
		isFullscreenable?: boolean;
		isClosable?: boolean;
		isResizable?: boolean;
		children?: import('svelte').Snippet;
		class?: string;
	}
	let {
		title,
		open = $bindable(true),
		minWidthClass = 'min-w-40',
		minHeightClass = 'min-h-25',
		maxWidthClass,
		maxHeightClass,
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
	top = 100;
	left = 100;
	let drag = $state(false);
	let isFullscreen = false;

	onMount(() => {
		$effect(() => {
			if (element) {
				element.style.top = top + 'px';
				element.style.left = left + 'px';
			}
		});

		const unsubscribe = topWindow.subscribe((value) => {
			isTopWindow = value === uid;
		});

		return () => {
			unsubscribe();
		};
	});

	let element: HTMLDivElement | undefined = $state();

	let isTopWindow = $state(false);

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
		console.log("later soon soon i promise (don't trust me)");
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
		class={[
			'absolute shadow-shadow/50 shadow-xl overflow-hidden min-h-fit',
			isTopWindow ? 'z-50' : '',
			isResizable ? 'resize' : '',
			minWidthClass
		]}
		onmousedown={() => {
			topWindow.set(uid);
		}}
	>
		<!-- style={`left:${left}px; top:${top}px;`} -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			onmousedown={mouseDown}
			class="bg-titlebar text-titlebar-content flex items-center px-2 gap-2 select-none h-(--titlebar-height)"
		>
			<span class="grow truncate">{title}</span>
			{#if isFullscreenable}
				<button
					aria-label="fullscreen"
					class="icon-[pixel--expand] text-titlebar-content hover:text-white scale-90 shrink-0"
					onclick={fullscreen}
				></button>
			{/if}
			{#if isClosable}
				<button
					aria-label="close"
					class="icon-[pixel--window-close] text-titlebar-content hover:text-red-500 shrink-0"
					onclick={close}
				></button>
			{/if}
		</div>
		<div
			class={[
				'bg-neutral text-neutral-content w-full h-full overflow-auto',
				minHeightClass,
				className
			]}
			{...rest}
		>
			{@render children?.()}
		</div>
	</div>
{/if}
