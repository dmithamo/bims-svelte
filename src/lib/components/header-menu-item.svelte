<script lang="ts">
  import { page } from '$app/stores';
  import Flex from '$lib/components/flex.svelte';
  import { type AppIcon, AppRoute } from '$lib/utils/enums';
  import { isPathActive } from '$lib/utils/nav.utils';
  import { AlignOption, DirectionOption, GapOption } from '$lib/utils/styles.utils';
  import clsx from 'clsx';

  export let icon: AppIcon;
  export let label: string;
  export let path: AppRoute;
  export let onClick: () => void = () => {};
</script>

<a href={path} on:click={onClick}>
  <Flex
    align={AlignOption.center}
    direction={DirectionOption.row}
    extraClasses={clsx({
      'font-bold text-orange-500': isPathActive({
        path,
        currentPath: $page.url.pathname,
        exact: false
      })
    })}
    gap={GapOption.medium}
  >
    <span class={clsx('iconify ', 'h-6 w-6')} data-icon={icon} />
    <span class="capitalize">{label}</span>
  </Flex>
</a>
