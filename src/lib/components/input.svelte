<script lang="ts">
  import Flex from '$lib/components/flex.svelte';
  import { DirectionOption, GapOption, WidthOption } from '$lib/utils/styles.utils';
  import clsx from 'clsx';

  let {
    name = '',
    type = '',
    label = '',
    error = '',
    value = '',
    onChange = () => {},
    placeholder = '',
    required = false,
    disabled = false
  }: {
    name?: string;
    type?: string;
    label?: string;
    error?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
  } = $props();
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
