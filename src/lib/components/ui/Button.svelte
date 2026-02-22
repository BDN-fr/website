<script lang="ts">
	import { Button } from 'bits-ui';
	import type { ButtonRootProps } from 'bits-ui';

	let { children, class: className, ...rest }: ButtonRootProps = $props();
</script>

<Button.Root
	class={[
		'border border-accent size-fit px-6 shadow shadow-shadow bg-neutral text-neutral-content hover:border-selection cursor-pointer',
		className
	]}
	{...rest}
>
	{@render children?.()}
</Button.Root>
