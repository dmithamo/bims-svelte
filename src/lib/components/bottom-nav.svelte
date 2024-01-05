<script lang="ts">
  import { page } from '$app/stores';
  import type { NavItem } from '$lib/utils/bims.types';
  import { AlignOption, GapOption, defaultIconSize } from '$lib/utils/styles.utils';
  import clsx from 'clsx';
  import Flex from './flex.svelte';

  export let navItems: NavItem[] = [];
  const isActive = (path: string) => $page.url.toString().endsWith(path);
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
