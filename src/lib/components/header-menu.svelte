<script lang="ts">
  import { pushState } from '$app/navigation';
  import { page } from '$app/stores';
  import Flex from '$lib/components/flex.svelte';
  import HeaderMenuItem from '$lib/components/header-menu-item.svelte';
  import SessionUserView from '$lib/components/session-user-view.svelte';
  import type { TApp, TSessionUser } from '$lib/utils/bims.types';
  import { AppIcon, AppRoute } from '$lib/utils/enums';
  import {
    AlignOption,
    DirectionOption,
    GapOption,
    JustifyOption,
    WidthOption
  } from '$lib/utils/styles.utils';
  import clsx from 'clsx';

  export let allowedAppList: TApp[] = [];
  export let sessionUser: TSessionUser;

  const topHeaderLinks: { path: AppRoute; label: string; icon: AppIcon }[] = [
    { path: AppRoute.profile, label: 'profile', icon: AppIcon.id },
    { path: AppRoute.account, label: 'account', icon: AppIcon.accountSettings }
  ];

  const showModal = () => {
    pushState('', {
      showModal: true
    });
  };
</script>

<button on:click={showModal} type="button" tabindex={0}>
  <SessionUserView isDetailedView={false} {sessionUser} />
</button>

{#if $page.state.showModal}
  <Flex
    width={WidthOption.full}
    gap={GapOption.large}
    direction={DirectionOption.column}
    extraClasses={clsx(
      'absolute right-0 top-0',
      'sm:w-[25rem]',
      'menu bg-base-200 rounded-box p-8 shadow-md',
      'z-10'
    )}
  >
    <Flex align={AlignOption.center} justify={JustifyOption.between} width={WidthOption.full}>
      <SessionUserView isDetailedView={true} {sessionUser} />

      <button type="button" on:click={() => history.back()}>
        <span
          class={clsx('iconify cursor-pointer', 'h-8 w-8 sm:h-10 sm:w-10')}
          data-icon={AppIcon.close}
        />
      </button>
    </Flex>
    <Flex width={WidthOption.full} direction={DirectionOption.column} gap={GapOption.large}>
      {#each allowedAppList as app (app.path)}
        <HeaderMenuItem path={app.path} label={app.name} icon={app.icon} />
      {/each}
    </Flex>
    <div class="divider" />
    <Flex width={WidthOption.full} direction={DirectionOption.column} gap={GapOption.large}>
      {#each topHeaderLinks as headerLink (headerLink.path)}
        <HeaderMenuItem path={headerLink.path} label={headerLink.label} icon={headerLink.icon} />
      {/each}
    </Flex>
    <div class="divider" />
    <Flex direction={DirectionOption.column} gap={GapOption.large}>
      <HeaderMenuItem
        path={AppRoute.notifications}
        label={'notifications'}
        icon={AppIcon.notifications}
      />
      <HeaderMenuItem path={AppRoute.logout} label={'logout'} icon={AppIcon.logout} />
    </Flex>
  </Flex>
{/if}
