<script lang="ts">
  import Flex from '$lib/components/flex.svelte';
  import Header from '$lib/components/header.svelte';
  import { DirectionOption, HeightOption } from '$lib/utils/styles.utils';
  import clsx from 'clsx';
  import { onMount } from 'svelte';
  import { themeChange } from 'theme-change';
  import '../app.pcss';

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false);
    // 👆 false parameter is required for svelte
  });
</script>

<Flex direction={DirectionOption.column} height={HeightOption.screen}>
  <div class={clsx('h-16 w-full')}>
    <Header />
  </div>

  <div class="relative w-full flex-1 p-3">
    <slot />
  </div>
</Flex>
