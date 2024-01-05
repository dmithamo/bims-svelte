<script lang="ts">
  import { page } from '$app/stores';
  import type { NavItem } from '$lib/utils/bims.types';
  import { AlignOption, defaultIconSize, GapOption } from '$lib/utils/styles.utils';
  import clsx from 'clsx';
  import Flex from './flex.svelte';
  import { pathIsActive } from '$lib/utils/nav.utils';

  export let navItems: NavItem[] = [];
  const isActive = (path: string) =>
    pathIsActive({
      path,
      currentPath: $page.url.toString()
    });
</script>

{#if navItems.length > 0}
  <div class="btm-nav btm-nav-sm border-t">
    {#each navItems as { path, label, icon } (path)}
      <a href={path} class={clsx('text-base', { 'font-bold text-orange-600': isActive(path) })}>
        <Flex align={AlignOption.center} gap={GapOption.minimum}>
          <span class={clsx('iconify ', defaultIconSize)} data-icon={icon}></span>
          {#if isActive(path)}<span class="text-md">{label}</span>{/if}
        </Flex>
      </a>
    {/each}
  </div>
{/if}
