<script lang="ts">
  import Flex from '$lib/components/flex.svelte';
  import type { TSessionUser } from '$lib/utils/bims.types';
  import { AlignOption, DirectionOption, GapOption } from '$lib/utils/styles.utils';
  import clsx from 'clsx';

  let {
    isDetailedView = false,
    sessionUser
  }: { isDetailedView?: boolean; sessionUser: TSessionUser } = $props();
</script>

<Flex align={AlignOption.center} gap={GapOption.medium}>
  {#if sessionUser.avatar}
    <img
      class={clsx('h-12 w-10 rounded-full sm:h-10 sm:w-10')}
      src={sessionUser.avatar}
      alt={sessionUser.name}
    />{:else}
    <span class="iconify h-10 w-10 text-gray-900" data-icon={'icon-park-outline:worker'}></span>
  {/if}

  <div
    class={clsx('', {
      'hidden sm:block': !isDetailedView
    })}
  >
    <Flex direction={DirectionOption.column} gap={GapOption.none}>
      <div class={'capitalize'}>{sessionUser.name}</div>
      <div class={''}>
        <span class={'capitalize'}>{sessionUser.role.name}</span>
        <span> &#8901; </span>
        <span class={''}>{sessionUser.account.name}</span>
      </div>
    </Flex>
  </div>
</Flex>
