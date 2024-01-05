<script lang="ts">
  import { page } from '$app/stores';
  import Flex from '$lib/components/flex.svelte';
  import HeaderMenu from '$lib/components/header-menu.svelte';
  import Logo from '$lib/components/logo.svelte';
  import type { App, SessionUser } from '$lib/utils/bims.types';
  import { pathIsActive } from '$lib/utils/nav.utils';
  import {
    AlignOption,
    DirectionOption,
    GapOption,
    HeightOption,
    JustifyOption,
    WidthOption
  } from '$lib/utils/styles.utils';
  import clsx from 'clsx';

  export let sessionUser: SessionUser;
  export let allowedAppList: App[] = [];

  $: activeApp = allowedAppList.find((app) =>
    pathIsActive({
      path: app.path,
      currentPath: $page.url.pathname
    })
  );
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
        gap={GapOption.medium}
        justify={JustifyOption.start}
        extraClasses="font-bold text-orange-600"
      >
        <span role="button" tabindex={0} on:click={() => history.back()}>
          <span
            class={clsx('iconify h-8 w-8 cursor-pointer')}
            data-icon={'solar:alt-arrow-left-outline'}
          />
        </span>

        <span class="text-xl">{activeApp.name}</span>
      </Flex>
    {:else}
      <Logo shouldClickToHome={!!sessionUser} />
    {/if}

    <HeaderMenu {sessionUser} {allowedAppList} />
  </Flex>
{:else}
  <header class="h-full w-full p-3 shadow">
    <Logo />
  </header>
{/if}
