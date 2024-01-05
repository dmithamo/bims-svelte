<script lang="ts">
  import BottomNav from '$lib/components/bottom-nav.svelte';
  import type { NavItem } from '$lib/utils/bims.types';
  import { AppRoute } from '$lib/utils/enums';

  const sidebarItems: NavItem[] = [
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
</script>

<BottomNav navItems={allowedSidebarItems} />

<slot />
