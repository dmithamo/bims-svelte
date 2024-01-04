<script>
  const version = import.meta.env.VITE_APP_VERSION;
  import Logo from '$lib/components/logo.svelte';
</script>

<div class="flex h-full w-full flex-col items-center justify-center">
  <div class="m-auto flex flex-col">
    <Logo shouldClickToHome={false} />
    <hr class="my-4" />
    <p class="font-bold">v{version}</p>
  </div>
</div>
