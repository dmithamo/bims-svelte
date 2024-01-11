<script lang="ts">
  import BottomNav from '$lib/components/bottom-nav.svelte';
  import type { NavItem } from '$lib/utils/bims.types';
  import { AppIcon, AppRoute } from '$lib/utils/enums';

  const sidebarItems: NavItem[] = [
    {
      path: AppRoute.moneyOverview,
      label: 'Overview',
      icon: AppIcon.moneyOverview,
      iconActive: AppIcon.moneyOverviewActive,
      permissions: ['money:read']
    },
    {
      path: AppRoute.moneyBudget,
      label: 'Budget',
      icon: AppIcon.moneyBudget,
      iconActive: AppIcon.moneyBudgetActive,
      permissions: ['money:budget:read']
    },
    {
      path: AppRoute.moneyTransactions,
      label: 'Transactions',
      icon: AppIcon.moneyTransactions,
      iconActive: AppIcon.moneyTransactionsActive,
      permissions: ['money:transactions:read']
    },
    {
      path: AppRoute.moneySettings,
      label: 'Settings',
      icon: AppIcon.settings,
      iconActive: AppIcon.settingsActive,
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
