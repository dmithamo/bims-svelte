<script lang="ts">
  import { pushState } from '$app/navigation';
  import Flex from '$lib/components/flex.svelte';
  import type { App, SessionUser } from '$lib/utils/bims.types';
  import { AppIcon, AppRoute } from '$lib/utils/enums';
  import {
    AlignOption,
    DirectionOption,
    GapOption,
    JustifyOption,
    SpacingOption,
    WidthOption
  } from '$lib/utils/styles.utils';
  import clsx from 'clsx';
  import { page } from '$app/stores';
  import SessionUserView from '$lib/components/session-user-view.svelte';

  export let allowedAppList: App[] = [];
  export let appVersion: string = '';
  export let sessionUser: SessionUser;

  const topHeaderLinks: { path: AppRoute; label: string; icon: AppIcon }[] = [
    { path: AppRoute.notifications, label: 'notifications', icon: AppIcon.notifications },
    { path: AppRoute.preferences, label: 'preferences', icon: AppIcon.notifications }
  ];

  const showModal = () => {
    console.log($page.state.showModal, '<<<MODL');

    pushState('', {
      showModal: true
    });
  };
</script>

<span on:click={showModal} role="button" tabindex={0}>
  <SessionUserView isDetailedView={false} {sessionUser} />
</span>

{#if $page.state.showModal}
  <div
    class={clsx(
      'absolute right-0 top-0',
      'w-full sm:w-[25rem]',
      'flex flex-col gap-6',
      'bg-white p-8 shadow',
      'z-10'
    )}
  >
    <Flex
      align={AlignOption.center}
      justify={JustifyOption.between}
      marginY={SpacingOption.large}
      width={WidthOption.full}
    >
      <SessionUserView isDetailedView={true} {sessionUser} />

      <span role="button" on:click={() => history.back()}>
        <span
          class={clsx('iconify cursor-pointer', 'h-8 w-8 sm:h-10 sm:w-10')}
          data-icon={AppIcon.close}
        />
      </span>
    </Flex>

    <Flex direction={DirectionOption.column} gap={GapOption.medium} marginY={SpacingOption.large}
    ></Flex>

    <hr class={'my-4'} />

    <Flex direction={DirectionOption.column} gap={GapOption.medium} marginY={SpacingOption.large}>
      {#each allowedAppList as app (app.path)}{/each}
    </Flex>

    <hr class={'my-4'} />

    <Flex direction={DirectionOption.column} gap={GapOption.large} marginY={SpacingOption.large}>
      <Flex align={AlignOption.center} direction={DirectionOption.row} gap={GapOption.medium}>
        <span class={clsx('iconify ', 'h-8 w-8 sm:h-10 sm:w-10')} data-icon={AppIcon.userAvatar} />
        <span>v-{appVersion}</span>
      </Flex>

      <form method={'post'}>
        <button class={clsx('border-0 bg-transparent outline-0')}>
          <Flex align={AlignOption.center} direction={DirectionOption.row} gap={GapOption.medium}>
            <span
              class={clsx('iconify ', 'h-8 w-8 sm:h-10 sm:w-10')}
              data-icon={AppIcon.userAvatar}
            />
            <span>Logout</span>
          </Flex>
        </button>
      </form>
    </Flex>
  </div>
{/if}
