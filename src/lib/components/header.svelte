<script lang="ts">
  import { pushState } from '$app/navigation';
  import Flex from '$lib/components/flex.svelte';
  import Logo from '$lib/components/logo.svelte';
  import { LogoSize } from '$lib/utils/enums';
  import {
    AlignOption,
    defaultIconSize,
    DirectionOption,
    GapOption,
    HeightOption,
    JustifyOption,
    WidthOption
  } from '$lib/utils/styles.utils';
  import clsx from 'clsx';
  import type { App, SessionUser } from '$lib/utils/bims.types';

  export let sessionUser: SessionUser | null = null;
  export let appVersion: string | null = null;
  export let allowedAppList: App[] = [];

  function showModal(modalId: 'notifications' | 'userProfile') {
    pushState('', {
      modal: modalId
    });
  }

  console.log(showModal);
</script>

{#if !sessionUser}
  <header class="h-full w-full p-3 shadow">
    <Logo />
  </header>
{/if}

{#if sessionUser}
  <Flex
    align={AlignOption.center}
    direction={DirectionOption.row}
    extraClasses="shadow p-3"
    height={HeightOption.full}
    justify={JustifyOption.between}
    width={WidthOption.full}
  >
    <Logo shouldClickToHome={!!sessionUser} size={LogoSize.LARGE} />

    <Flex align={AlignOption.center} gap={GapOption.large}>
      <span
        class={clsx(
          'iconify drawer-button cursor-pointer opacity-75 hover:opacity-100',
          defaultIconSize
        )}
        data-icon="carbon:notification-filled"
      ></span>
      <span
        class={clsx(
          'iconify drawer-button cursor-pointer opacity-75 hover:opacity-100',
          defaultIconSize
        )}
        data-icon="carbon:user-avatar-filled"
      ></span>
    </Flex>
  </Flex>
{/if}
