<script lang="ts">
  import { page } from '$app/stores';
  import Flex from '$lib/components/flex.svelte';
  import HeaderMenu from '$lib/components/header-menu.svelte';
  import Logo from '$lib/components/logo.svelte';
  import type { App, SessionUser } from '$lib/utils/bims.types';
  import {
    AlignOption,
    DirectionOption,
    GapOption,
    HeightOption,
    JustifyOption,
    WidthOption,
    defaultIconSize
  } from '$lib/utils/styles.utils';
  import clsx from 'clsx';

  export let sessionUser: SessionUser;
  export let appVersion: string;
  export let allowedAppList: App[] = [];

  const activeApp = allowedAppList.find((app) => $page.url.toString().endsWith(app.path));
</script>

{#if sessionUser}
  <Flex
    align={AlignOption.center}
    direction={DirectionOption.row}
    extraClasses="shadow p-3"
    height={HeightOption.full}
    justify={JustifyOption.between}
    width={WidthOption.full}
  >
    {#if activeApp}
      <Flex
        align={AlignOption.center}
        direction={DirectionOption.row}
        gap={GapOption.minimum}
        justify={JustifyOption.start}
        extraClasses="font-bold text-orange-600"
      >
        <span class={clsx('iconify', defaultIconSize)} data-icon={activeApp.icon} />
        <span class="text-xl font-bold">{activeApp.name}</span>
      </Flex>
    {:else}
      <Logo shouldClickToHome={!!sessionUser} />
    {/if}

    <HeaderMenu {appVersion} {sessionUser} />
  </Flex>
{:else}
  <header class="h-full w-full p-3 shadow">
    <Logo />
  </header>
{/if}
