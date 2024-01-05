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

  export let isAuthenticated = true;

  function showModal(modalId: 'notifications' | 'userProfile') {
    pushState('', {
      modal: modalId
    });
  }

  console.log(showModal);
</script>

<Flex
  align={AlignOption.center}
  direction={DirectionOption.row}
  extraClasses="shadow p-3"
  height={HeightOption.full}
  justify={JustifyOption.between}
  width={WidthOption.full}
>
  <Logo shouldClickToHome={isAuthenticated} size={LogoSize.LARGE} />
  {#if isAuthenticated}
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
  {/if}
</Flex>
