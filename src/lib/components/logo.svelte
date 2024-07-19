<script lang="ts">
  import { LogoSize } from '$lib/utils/enums';
  import clsx from 'clsx';
  let {
    shouldClickToHome = true,
    size = LogoSize.MEDIUM
  }: { shouldClickToHome?: boolean; size?: LogoSize } = $props();
</script>

<svelte:element
  this={shouldClickToHome ? 'a' : 'span'}
  class={clsx(
    'text-orange-500',
    'select-none',
    'font-ops',
    {
      'text-4xl': size === LogoSize.LARGE,
      'text-2xl': size === LogoSize.MEDIUM,
      'text-lg': size === LogoSize.SMALL
    },
    {
      'cursor-pointer': shouldClickToHome
    }
  )}
  href="/"
>
  bims
</svelte:element>
