<script>
	import Icon from '../self/Desktop/Icon.svelte';

	function onOpen() {
		window.open('https://github.com/BDN-fr/website', 'about:blank');
	}
</script>

<Icon appName="Github" {onOpen}>
	<span class="icon-[pixel--github]"></span>
</Icon>
