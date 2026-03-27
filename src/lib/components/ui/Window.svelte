<script lang="ts">
	import { onMount, untrack } from 'svelte';
	import type { Attachment } from 'svelte/attachments';
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
	let content: HTMLDivElement | undefined = $state();
	let titlebar: HTMLDivElement | undefined = $state();
	let resizeDirection: string | null = $state(null);
	let initialWidth = $state(0);
	let initialHeight = $state(0);
	let initialX = $state(0);
	let initialY = $state(0);

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

	const fixSize: Attachment = (el) => {
		if (content) {
			let rect = content.getBoundingClientRect();
			content.style.width = rect.width + 'px';
			content.style.height = rect.height + 'px';
		}
	};

	function startResize(direction: string, event: MouseEvent) {
		if (isFullscreen) return;
		if (!content) return;

		const rect = content.getBoundingClientRect();
		drag = true;
		initialWidth = rect.width;
		initialHeight = rect.height;
		initialX = event.x;
		initialY = event.y;
		resizeDirection = direction;
	}

	function mouseDown(event: MouseEvent) {
		if (isFullscreen) return;
		if (!element) return;

		drag = true;
		var rect = element.getBoundingClientRect();
		yDiff = event.y - rect.y;
		xDiff = event.x - rect.x;
	}

	function move(event: MouseEvent) {
		if (!drag && !resizeDirection) return;

		if (resizeDirection) {
			const deltaX = event.x - initialX;
			const deltaY = event.y - initialY;

			if (content && element) {
				let newWidth = initialWidth;
				let newHeight = initialHeight;
				let newLeft = left;
				let newTop = top;

				if (
					resizeDirection === 'left' ||
					resizeDirection === 'right' ||
					resizeDirection === 'topleft' ||
					resizeDirection === 'bottomleft' ||
					resizeDirection === 'topright' ||
					resizeDirection === 'bottomright'
				) {
					if (
						resizeDirection === 'left' ||
						resizeDirection === 'topleft' ||
						resizeDirection === 'bottomleft'
					) {
						newWidth = initialWidth - deltaX;
						newLeft = initialX + deltaX + scrollX;
					} else {
						newWidth = initialWidth + deltaX;
					}

					let oldRight = element.getBoundingClientRect().right;
					content.style.width = newWidth + 'px';
					let oldLeft = left;
					left = newLeft;
					let right = element.getBoundingClientRect().right;
					if (right > oldLeft + newWidth && resizeDirection.includes('left')) {
						left = oldLeft + (oldRight - right);
					}
				}

				if (
					resizeDirection === 'top' ||
					resizeDirection === 'bottom' ||
					resizeDirection === 'topleft' ||
					resizeDirection === 'topright' ||
					resizeDirection === 'bottomleft' ||
					resizeDirection === 'bottomright'
				) {
					if (
						resizeDirection === 'top' ||
						resizeDirection === 'topleft' ||
						resizeDirection === 'topright'
					) {
						newHeight = initialHeight - deltaY;
						newTop = initialY + deltaY + scrollY;
					} else {
						newHeight = initialHeight + deltaY;
					}

					let oldBottom = element.getBoundingClientRect().bottom;
					content.style.height = newHeight + 'px';
					let oldTop = top;
					top = newTop;
					let bottom = element.getBoundingClientRect().bottom;
					let titlebarHeight = titlebar ? titlebar.getBoundingClientRect().height : 0;
					if (bottom > oldTop + newHeight + titlebarHeight && resizeDirection.includes('top')) {
						top = oldTop + (oldBottom - bottom);
					}
				}
			}
		} else {
			mouseY = event.y;
			mouseX = event.x;
		}
	}

	function scroll(event: UIEvent) {
		if (!drag && !resizeDirection) return;
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

	function resetResize() {
		resizeDirection = null;
		drag = false;
	}
</script>

<svelte:window
	onmousemove={move}
	onmouseup={() => {
		drag = false;
		resetResize();
	}}
	onscroll={scroll}
/>

{#if open}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		bind:this={element}
		class={['fixed shadow-shadow/50 shadow-xl', drag ? 'select-none' : '']}
		onmousedown={() => {
			topWindow.set(uid);
		}}
	>
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			bind:this={titlebar}
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
			bind:this={content}
			{@attach fixSize}
			class={[
				'bg-neutral text-neutral-content w-[calc(100lvw-50px)] max-h-[calc(calc(100lvh-var(--titlebar-height))-50px)] overflow-auto',
				isFullscreen ? 'min-w-lvw' : widthClass,
				isFullscreen ? 'min-h-[calc(100lvh-var(--titlebar-height))]' : heightClass,
				className
			]}
			{...rest}
		>
			{@render children?.()}
		</div>
		{#if isResizable && !isFullscreen}
			<div
				class="absolute w-[8px] top-0 h-full -left-[4px] cursor-w-resize"
				onmousedown={(e) => startResize('left', e)}
			></div>
			<div
				class="absolute w-[8px] top-0 h-full -right-[4px] cursor-e-resize"
				onmousedown={(e) => startResize('right', e)}
			></div>
			<div
				class="absolute h-[8px] -top-[4px] w-full left-0 cursor-n-resize"
				onmousedown={(e) => startResize('top', e)}
			></div>
			<div
				class="absolute h-[8px] -bottom-[4px] w-full left-0 cursor-s-resize"
				onmousedown={(e) => startResize('bottom', e)}
			></div>
			<div
				class="absolute h-[8px] w-[8px] -top-[4px] -left-[4px] cursor-nw-resize"
				onmousedown={(e) => startResize('topleft', e)}
			></div>
			<div
				class="absolute h-[8px] w-[8px] -top-[4px] -right-[4px] cursor-ne-resize"
				onmousedown={(e) => startResize('topright', e)}
			></div>
			<div
				class="absolute h-[8px] w-[8px] -bottom-[4px] -left-[4px] cursor-sw-resize"
				onmousedown={(e) => startResize('bottomleft', e)}
			></div>
			<div
				class="absolute h-[8px] w-[8px] -bottom-[4px] -right-[4px] cursor-se-resize"
				onmousedown={(e) => startResize('bottomright', e)}
			></div>
		{/if}
	</div>
{/if}
