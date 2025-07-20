<script>
  let { children, colorClass='bg-(--custom-blue-200)', round=false, onhover=false } = $props()
</script>

<div class="relative flex items-center justify-center size-full">
  <div class="absolute {colorClass}{round ? ' rounded-full' : ''} size-full blur-2xl {onhover ? 'hidden hover:block' : ''}"></div>
  <div class="relative z-10 size-full">
    {@render children()}
  </div>
</div>