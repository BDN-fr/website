<script lang="ts">
	import Clicker from '$lib/components/apps/Clicker.svelte';
	import Icon from './Icon.svelte';

	let clickerWindow = $state(false);
</script>

<Clicker bind:windowOpened={clickerWindow} />

<div
	class="min-w-svw max-w-lvw min-h-svh max-h-lvh gap-4 p-4 flex flex-col flex-wrap place-content-start"
>
	<Icon
		appName="Clicker"
		onOpen={() => {
			clickerWindow = true;
		}}
	>
		<span class="icon-[pixel--trending-solid]"></span>
	</Icon>
</div>
