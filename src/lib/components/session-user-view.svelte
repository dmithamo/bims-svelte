<script lang="ts">
  import type { SessionUser } from '$lib/utils/bims.types';
  import { AlignOption, DirectionOption, GapOption } from '$lib/utils/styles.utils';
  import clsx from 'clsx';
  import Flex from '$lib/components/flex.svelte';
  import { AppIcon } from '$lib/utils/enums';

  export let isDetailedView = false;
  export let sessionUser: SessionUser;
</script>

<Flex align={AlignOption.center} gap={GapOption.minimum}>
  {#if sessionUser.avatar}<img
      class={clsx('h-8 w-8 rounded-full sm:h-10 sm:w-10', {
        'h-10 w-10 sm:h-14 sm:w-14': isDetailedView
      })}
      src={sessionUser.avatar}
      alt={sessionUser.name}
    />{:else}
    <span
      class={clsx('iconify ', 'h-8 w-8 sm:h-10 sm:w-10', {
        'h-10 w-10 sm:h-14 sm:w-14': isDetailedView
      })}
      data-icon={AppIcon.userAvatar}
    />
  {/if}

  <div
    class={clsx('hidden text-gray-500 lg:block', {
      'block sm:block': isDetailedView
    })}
  >
    <Flex direction={DirectionOption.column} gap={GapOption.none}>
      <div class={'capitalize text-primary'}>{sessionUser.name}</div>
      {#if isDetailedView}<span class={'text-xs'}>{sessionUser.email}</span>{/if}
      <div class={''}>
        <span class={'uppercase'}>{sessionUser.role.name}</span>
        <span> » </span>
        <span class={''}>{sessionUser.account.name}</span>
      </div>
    </Flex>
  </div>
</Flex>
