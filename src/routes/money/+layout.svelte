<script lang="ts">
  import Flex from '$lib/components/flex.svelte';
  import type { SidebarItem } from '$lib/utils/bims.types';
  import { AppRoute } from '$lib/utils/enums';
  import { AlignOption, GapOption, HeightOption, WidthOption } from '$lib/utils/styles.utils';

  const sidebarItems: SidebarItem[] = [
    {
      path: AppRoute.moneyOverview,
      label: 'Overview',
      icon: '💰',
      permissions: ['money:read']
    },
    {
      path: AppRoute.moneyBudget,
      label: 'Budget',
      icon: '📊',
      permissions: ['money:budget:read']
    },
    {
      path: AppRoute.moneyTransactions,
      label: 'Transactions',
      icon: '💸',
      permissions: ['money:transactions:read']
    },
    {
      path: AppRoute.moneySettings,
      label: 'Settings',
      icon: '⚙️',
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

<Flex
  width={WidthOption.full}
  align={AlignOption.start}
  gap={GapOption.none}
  height={HeightOption.full}
>
  <div class="btm-nav">
    {#each allowedSidebarItems as { path, label, icon } (path)}
      <a href={path}>
        <Flex align={AlignOption.center} gap={GapOption.minimum}>
          {icon}
          <span>{label}</span>
        </Flex>
      </a>
    {/each}
  </div>
  <slot />
</Flex>
