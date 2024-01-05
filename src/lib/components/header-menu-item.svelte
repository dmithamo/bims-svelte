<script lang="ts">
  import { type AppIcon, AppRoute } from '$lib/utils/enums';
  import { AlignOption, DirectionOption, GapOption } from '$lib/utils/styles.utils';
  import clsx from 'clsx';
  import Flex from '$lib/components/flex.svelte';
  import { pathIsActive } from '$lib/utils/nav.utils';
  import { page } from '$app/stores';

  export let icon: AppIcon;
  export let label: string;
  export let path: AppRoute;
</script>

<a href={path}>
  <Flex
    align={AlignOption.center}
    direction={DirectionOption.row}
    extraClasses={clsx({
      'text-orange-500 font-bold': pathIsActive({ path, currentPath: $page.url.toString() })
    })}
    gap={GapOption.medium}
  >
    <span class={clsx('iconify ', 'h-6 w-6')} data-icon={icon} />
    <span class="capitalize">{label}</span>
  </Flex>
</a>
