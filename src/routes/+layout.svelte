<script lang="ts">
  import Flex from '$lib/components/flex.svelte';
  import Header from '$lib/components/header.svelte';
  import Logo from '$lib/components/logo.svelte';
  import { LogoSize } from '$lib/utils/enums';
  import {
    AlignOption,
    DirectionOption,
    HeightOption,
    JustifyOption,
    WidthOption
  } from '$lib/utils/styles.utils';
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

  <input
    class="toggle fixed bottom-4 right-4 z-10"
    data-toggle-theme="black,lofi"
    type="checkbox"
  />

  <div class="w-full flex-1">
    <slot />
  </div>
</Flex>
<div class={clsx('w-full', 'p-12', 'border-t')} data-theme="dim">
  <Flex
    align={AlignOption.center}
    direction={DirectionOption.column}
    justify={JustifyOption.around}
    width={WidthOption.full}
  >
    <Logo shouldClickToHome size={LogoSize.MEDIUM} />

    <p class={'text-sm opacity-50'}>
      <a
        class="underline underline-offset-2"
        href="https://github.com/dmithamo"
        rel="noreferrer"
        target="_blank"
      >
        &copy;2023 dmithamo
      </a>
    </p>
  </Flex>
</div>
