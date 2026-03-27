<script>
	import { isMobile } from '$lib/stores/IsMobile';
	import Icon from '../self/Desktop/Icon.svelte';
	let mobile = $state($isMobile);
	isMobile.subscribe((val) => {
		mobile = val;
	});
</script>

<Icon
	appName={mobile ? 'Switch to PC mode' : 'Switch to mobile mode'}
	onOpen={() => {
		$isMobile = !$isMobile;
	}}
>
	<span class="icon-[pixel--refresh-solid]"></span>
</Icon>
