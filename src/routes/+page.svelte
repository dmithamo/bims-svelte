<script>
  const version = import.meta.env.VITE_APP_VERSION;
  import Logo from '$lib/components/logo.svelte';
</script>

<div class="flex h-full w-full flex-col items-center justify-center">
  <div class="m-auto flex flex-col">
    <Logo />
    <hr class="my-4" />
    <p class="font-bold">This is version<span class="font-hand">v{version}</span></p>
  </div>
</div>
