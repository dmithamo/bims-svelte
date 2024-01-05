<script lang="ts">
  import Flex from '$lib/components/flex.svelte';
  import Header from '$lib/components/header.svelte';
  import type { App, SessionUser } from '$lib/utils/bims.types';
  import { AppIcon, AppRoute } from '$lib/utils/enums';
  import { DirectionOption, HeightOption } from '$lib/utils/styles.utils';
  import clsx from 'clsx';
  import { onMount } from 'svelte';
  import { themeChange } from 'theme-change';
  import '../app.pcss';

  // NOTE: the element that is using one of the theme attributes must be in the DOM on mount
  onMount(() => {
    themeChange(false);
    // 👆 false parameter is required for svelte
  });

  const sessionUser: SessionUser | null = {
    id: crypto.randomUUID(),
    email: 'b@dmithamo.dev',
    name: 'B Mithamo',
    // avatar: 'https://avatars.githubusercontent.com/u/1809239?v=4',
    role: {
      id: crypto.randomUUID(),
      name: 'admin'
    },
    account: {
      id: crypto.randomUUID(),
      name: 'Bundi IMS'
    }
  };

  const allowedAppList: App[] = [
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
</script>

<Flex direction={DirectionOption.column} height={HeightOption.screen}>
  <div class={clsx('h-16 w-full')}>
    <Header {allowedAppList} {sessionUser} />
  </div>

  <div class="relative w-full flex-1">
    <slot />
  </div>
</Flex>
