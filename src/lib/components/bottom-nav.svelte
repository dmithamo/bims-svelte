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
  import { isPathActive } from '$lib/utils/nav.utils';

  export let navItems: NavItem[] = [];
  $: isActive = (navItem: NavItem) => {
    return isPathActive({
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
          'text-primary opacity-90': isActive(navItem)
        })}
      >
        <Flex
          align={AlignOption.center}
          justify={JustifyOption.around}
          direction={DirectionOption.column}
        >
          <span
            class={clsx('iconify', { hidden: !isActive(navItem) }, defaultIconSize)}
            data-icon={navItem.iconActive}
          />
          <span
            class={clsx('iconify', { hidden: isActive(navItem) }, defaultIconSize)}
            data-icon={navItem.icon}
          />
          <span>{navItem.label}</span>
        </Flex>
      </a>
    {/each}
  </div>
{/if}
