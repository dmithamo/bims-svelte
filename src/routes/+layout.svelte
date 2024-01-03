<script lang="ts">
  import '../app.pcss';
  import { onMount } from 'svelte';
  import { themeChange } from 'theme-change';
  import Logo from '$lib/components/logo.svelte';
  import Header from '$lib/components/header.svelte';
  import { LogoSize } from '$lib/utils/enums';
  import clsx from 'clsx';
  import { DirectionOption, HEADER_NAV_HEIGHT, HeightOption } from '$lib/utils/styles.utils';
  import Flex from '$lib/components/flex.svelte';

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false);
    // 👆 false parameter is required for svelte
  });
</script>

<Flex direction={DirectionOption.column} height={HeightOption.screen}>
  <div class={clsx('w-full', HEADER_NAV_HEIGHT)}>
    <Header />
  </div>

  <input
    class="toggle fixed bottom-4 right-4 z-10"
    data-toggle-theme="emerald,dim"
    type="checkbox"
  />

  <div class="w-full flex-1">
    <slot />

    <div class={clsx('w-full', 'p-12', 'border-t')}>
      <Flex>
        <Logo size={LogoSize.MEDIUM} />

        <p class={'text-sm opacity-50'}>
          <a
            class={'underline'}
            href="https://github.com/dmithamo"
            rel="noreferrer"
            target="_blank"
          >
            &copy;2023 dmithamo | GitHub
          </a>
        </p>
      </Flex>
    </div>
  </div>
</Flex>
