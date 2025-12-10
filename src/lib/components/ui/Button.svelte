<script lang="ts">
	import { Button } from 'bits-ui';
	import type { ButtonRootProps } from 'bits-ui';

	let { children, class: className, ...rest }: ButtonRootProps = $props();
</script>

<Button.Root
	class={[
		'border border-titlebar size-fit px-6 shadow shadow-shadow bg-neutral text-neutral-content',
		className
	]}
	{...rest}
>
	{@render children?.()}
</Button.Root>
