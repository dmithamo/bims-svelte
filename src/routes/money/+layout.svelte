<script lang="ts">
  import { page } from '$app/stores';
  import Flex from '$lib/components/flex.svelte';
  import type { SidebarItem } from '$lib/utils/bims.types';
  import { AppRoute } from '$lib/utils/enums';
  import { AlignOption, GapOption } from '$lib/utils/styles.utils';
  import clsx from 'clsx';

  const sidebarItems: SidebarItem[] = [
    {
      path: AppRoute.moneyOverview,
      label: 'Overview',
      icon: 'carbon:wallet',
      permissions: ['money:read']
    },
    {
      path: AppRoute.moneyBudget,
      label: 'Budget',
      icon: 'carbon:diagram',
      permissions: ['money:budget:read']
    },
    {
      path: AppRoute.moneyTransactions,
      label: 'Transactions',
      icon: 'carbon:change-catalog',
      permissions: ['money:transactions:read']
    },
    {
      path: AppRoute.moneySettings,
      label: 'Settings',
      icon: 'carbon:settings',
      permissions: ['money:settings:read']
    }
  ];

  $: user = {
    permissions: [
      'money:read',
      'money:budget:read',
      'money:transactions:read',
      'money:settings:read'
    ]
  };

  $: allowedSidebarItems = sidebarItems.filter(({ permissions }) =>
    permissions.every((permission) => user.permissions.includes(permission))
  );

  $: {
    console.log($page.url.toString());
  }
  const isActive = (path: string) => $page.url.toString().endsWith(path);
</script>

<div class="btm-nav btm-nav-sm border-t">
  {#each allowedSidebarItems as { path, label, icon } (path)}
    <a href={path} class={clsx('text-base', { 'font-bold text-orange-600': isActive(path) })}>
      <Flex align={AlignOption.center} gap={GapOption.minimum}>
        <span class={clsx('iconify h-5 w-5', { 'h-6 w-6': isActive(path) })} data-icon={icon}
        ></span>
        {#if isActive(path)}<span class="text-md">{label}</span>{/if}
      </Flex>
    </a>
  {/each}
</div>

<slot />
