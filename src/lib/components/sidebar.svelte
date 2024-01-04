<script lang="ts">
  import type { SidebarItem } from '$lib/utils/bims.types';
  import { AlignOption, DirectionOption, GapOption } from '$lib/utils/styles.utils';
  import Flex from './flex.svelte';

  export let sidebarItems: SidebarItem[] = [];
</script>

<nav>
  <Flex direction={DirectionOption.column}>
    {#each sidebarItems as { path, label, icon } (path)}
      <a href={path}>
        <Flex align={AlignOption.center} gap={GapOption.minimum}>
          {icon}
          <span>{label}</span>
        </Flex>
      </a>
    {/each}
  </Flex>
</nav>
