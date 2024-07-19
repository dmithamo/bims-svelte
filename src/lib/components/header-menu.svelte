<script lang="ts">
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

  let {
    allowedAppList = [],
    sessionUser
  }: { allowedAppList: Array<TApp>; sessionUser: TSessionUser } = $props();

  const topHeaderLinks: { path: AppRoute; label: string; icon: AppIcon }[] = [
    { path: AppRoute.profile, label: 'profile', icon: AppIcon.id },
    { path: AppRoute.account, label: 'account', icon: AppIcon.accountSettings }
  ];

  let showModal: boolean = $state(false);
  let dialog: any = $state();

  $effect(() => {
    if (showModal && dialog) (dialog as HTMLDialogElement).showModal();
  });

  const closeModal = () => (showModal = false);
</script>

<button class="focus:outline-none" tabindex="-1" onclick={() => (showModal = true)}>
  <SessionUserView isDetailedView={false} {sessionUser} />
</button>

{#if showModal}
  <dialog
    class={clsx(
      'mr-0 mt-0',
      'h-screen w-[100vw] sm:w-[25rem]',
      'bg-base-200 p-8 backdrop:bg-base-200/90 sm:rounded-box sm:shadow-md',
      'z-10'
    )}
    bind:this={dialog}
    onclose={closeModal}
  >
    <Flex width={WidthOption.full} gap={GapOption.large} direction={DirectionOption.column}>
      <Flex align={AlignOption.center} justify={JustifyOption.between} width={WidthOption.full}>
        <SessionUserView isDetailedView={true} {sessionUser} />

        <button class="focus:outline-none" tabindex="-1" onclick={closeModal}>
          <span
            class={clsx('iconify cursor-pointer', 'h-8 w-8 sm:h-10 sm:w-10')}
            data-icon={AppIcon.close}
          />
        </button>
      </Flex>
      <Flex width={WidthOption.full} direction={DirectionOption.column} gap={GapOption.large}>
        {#each allowedAppList as app (app.path)}
          <HeaderMenuItem onClick={closeModal} path={app.path} label={app.name} icon={app.icon} />
        {/each}
      </Flex>
      <div class="divider" />
      <Flex width={WidthOption.full} direction={DirectionOption.column} gap={GapOption.large}>
        {#each topHeaderLinks as headerLink (headerLink.path)}
          <HeaderMenuItem
            onClick={closeModal}
            path={headerLink.path}
            label={headerLink.label}
            icon={headerLink.icon}
          />
        {/each}
      </Flex>
      <div class="divider" />
      <Flex direction={DirectionOption.column} gap={GapOption.large}>
        <HeaderMenuItem
          onClick={closeModal}
          path={AppRoute.notifications}
          label={'notifications'}
          icon={AppIcon.notifications}
        />
        <HeaderMenuItem
          onClick={closeModal}
          path={AppRoute.logout}
          label={'logout'}
          icon={AppIcon.logout}
        />
      </Flex>
    </Flex>
  </dialog>
{/if}
