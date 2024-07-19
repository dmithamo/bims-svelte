<script lang="ts">
  import Flex from '$lib/components/flex.svelte';
  import Header from '$lib/components/header.svelte';
  import type { TApp, TSessionUser } from '$lib/utils/bims.types';
  import { AppIcon, AppRoute } from '$lib/utils/enums';
  import { DirectionOption, HeightOption } from '$lib/utils/styles.utils';
  import clsx from 'clsx';
  import '../app.css';

  const sessionUser: TSessionUser | null = {
    id: crypto.randomUUID(),
    email: 'b@dmithamo.dev',
    name: 'B Mithamo',
    role: {
      id: crypto.randomUUID(),
      name: 'admin'
    },
    account: {
      id: crypto.randomUUID(),
      name: 'Bundi IMS'
    }
  };

  const allowedAppList: TApp[] = [
    {
      id: crypto.randomUUID(),
      name: 'Money',
      path: AppRoute.moneyOverview,
      icon: AppIcon.moneyOverview,
      permissions: ['money:read']
    },
    {
      id: crypto.randomUUID(),
      name: 'Timelines',
      path: AppRoute.timelinesOverview,
      icon: AppIcon.timelinesOverview,
      permissions: ['timelines:read']
    },
    {
      id: crypto.randomUUID(),
      name: 'Assets',
      path: AppRoute.assetsOverview,
      icon: AppIcon.assetsOverview,
      permissions: ['assets:read']
    }
  ];

  let { children }: { children?: any } = $props();
</script>

<Flex direction={DirectionOption.column} height={HeightOption.screen}>
  <div class={clsx('h-16 w-full')}>
    <Header {allowedAppList} {sessionUser} />
  </div>

  <div class="relative w-full flex-1">
    {#if children}
      {@render children()}
    {/if}
  </div>
</Flex>
