<script>
  import '../global.css'
	let {children} = $props()
</script>

<nav>
  navbar
</nav>

{@render children()}

<footer>
  footer
</footer>

<style>
  nav, footer {
    color: black;
    background-color: white;
  }
</style>