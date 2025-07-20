<script>
  let { title, titleClass = 'text-3xl', paddingClass = "p-4 pt-0", children} = $props()
</script>

<div class="w-full bg-neutral-500/25 dark:bg-neutral-500/35 rounded {paddingClass}">
  <h1 class="{titleClass} mx-4 pb-1">{title}</h1>
  <div>{@render children()}</div>
</div>