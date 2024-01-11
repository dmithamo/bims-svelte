<script lang="ts">
  import { page } from '$app/stores';
  import type { NavItem } from '$lib/utils/bims.types';
  import {
    AlignOption,
    defaultIconSize,
    DirectionOption,
    JustifyOption
  } from '$lib/utils/styles.utils';
  import clsx from 'clsx';
  import Flex from './flex.svelte';
  import { pathIsActive } from '$lib/utils/nav.utils';

  export let navItems: NavItem[] = [];
  $: isActive = (navItem: NavItem) => {
    console.log({
      path: navItem.path,
      iA: pathIsActive({
        path: navItem.path,
        currentPath: $page.url.pathname
      })
    });
    return pathIsActive({
      path: navItem.path,
      currentPath: $page.url.pathname
    });
  };
</script>

{#if navItems.length > 0}
  <div class="btm-nav btm-nav-sm border-t">
    {#each navItems as navItem (navItem.path)}
      <a
        href={navItem.path}
        class={clsx('opacity-55', {
          'active border-none text-primary opacity-90': isActive(navItem)
        })}
      >
        <Flex
          align={AlignOption.center}
          justify={JustifyOption.around}
          direction={DirectionOption.column}
        >
          {#if isActive(navItem)}
            <span class={clsx('iconify ', defaultIconSize)} data-icon={navItem.iconActive} />
          {/if}

          {#if !isActive(navItem)}
            <span class={clsx('iconify ', defaultIconSize)} data-icon={navItem.icon} />
          {/if}

          <span>{navItem.label}</span>
        </Flex>
      </a>
    {/each}
  </div>
{/if}
