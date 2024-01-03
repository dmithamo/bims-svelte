<script lang="ts">
  import '../app.pcss';
  import { onMount } from 'svelte';
  import { themeChange } from 'theme-change';
  import Logo from '$lib/components/logo.svelte';
  import { LogoSize } from '$lib/constants/enums';

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false);
    // 👆 false parameter is required for svelte
  });
</script>

<div class="relative h-screen w-full">
  <input class="toggle absolute bottom-1 right-1" data-toggle-theme="emerald,dim" type="checkbox" />

  <footer class="absolute left-1 top-full w-full bg-gray-300 p-4">
    <div class="flex w-full justify-between">
      <div class="opacity-55">
        <a href="https://icons8.com/icon/8319/mind-map" target="_blank">Mind Map</a> icon by
        <a href="https://icons8.com" target="_blank">Icons8</a>
      </div>
      <div class="flex items-center gap-2">
        <span>Copyright &copy; 2024</span>
        <Logo size={LogoSize.SMALL} />
      </div>
    </div>
  </footer>
  <slot />
</div>
