<script>
  let { children, color='--custom-blue-200', round=false, onhover=false } = $props()
</script>

<div class="relative flex items-center justify-center size-full">
  <div class="absolute {color.startsWith('--') ? `bg-(${color})` : `bg-[${color}]`} {round ? 'rounded-full' : ''} size-full blur-2xl {onhover ? 'hidden' : 'block'}"></div>
  <div class="relative z-10 size-full">
    {@render children()}
  </div>
</div>