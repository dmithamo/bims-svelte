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
  const isActive = (path: string) =>
    pathIsActive({
      path,
      currentPath: $page.url.pathname
    });
</script>

{#if navItems.length > 0}
  <div class="btm-nav btm-nav-sm border-t">
    {#each navItems as { path, label, icon } (path)}
      <a
        href={path}
        class={clsx('text-base opacity-55', {
          'font-bold text-orange-600 opacity-90': isActive(path)
        })}
      >
        <Flex
          align={AlignOption.center}
          justify={JustifyOption.around}
          direction={DirectionOption.column}
        >
          <span class={clsx('iconify ', defaultIconSize)} data-icon={icon}></span>
          <span class="text-md">{label}</span>
        </Flex>
      </a>
    {/each}
  </div>
{/if}
