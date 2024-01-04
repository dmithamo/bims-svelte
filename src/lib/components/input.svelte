<script lang="ts">
  import Flex from '$lib/components/flex.svelte';
  import { DirectionOption, GapOption, WidthOption } from '$lib/utils/styles.utils';
  import clsx from 'clsx';

  export let name: string = '';
  export let type: string = 'text';
  export let label: string = '';
  export let error: string = '';
  export let value: string = '';
  export let onChange: (value: string) => void = () => {};
  export let placeholder: string = '';
  export let required: boolean = false;
  export let disabled: boolean = false;
</script>

<Flex direction={DirectionOption.column} gap={GapOption.none} width={WidthOption.full}>
  <label class="text-xs font-bold" for={name}>{label}</label>
  <input
    class={clsx(
      'w-full p-2',
      'text-base placeholder-slate-400',
      'rounded',
      'border',
      'focus:border-black focus:bg-white focus:outline-none focus:ring-1 focus:ring-transparent',
      'disabled:text-slate-500 disabled:shadow-none',
      {
        'border-error text-error focus:border-error focus:text-error': !!error
      }
    )}
    {disabled}
    {name}
    on:input={(e) => onChange((e.target as HTMLInputElement).value)}
    {placeholder}
    {required}
    {type}
    {value}
  />
  {#if error}
    <small class="text-red-500">{error}</small>
  {/if}
</Flex>
