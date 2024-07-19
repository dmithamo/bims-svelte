<script lang="ts">
  import {
    AlignOption,
    DirectionOption,
    GapOption,
    getHeightClass,
    getPaddingXClass,
    getPaddingYClass,
    getWidthClass,
    HeightOption,
    JustifyOption,
    SpacingOption,
    WidthOption
  } from '$lib/utils/styles.utils';
  import clsx from 'clsx';
  let {
    justify = JustifyOption.start,
    align = AlignOption.start,
    direction = DirectionOption.row,
    width = WidthOption.default,
    height = HeightOption.default,
    paddingX = SpacingOption.default,
    paddingY = SpacingOption.default,
    marginX = SpacingOption.default,
    marginY = SpacingOption.default,
    gap = GapOption.default,
    extraClasses = '',
    tag = 'div',
    children
  }: {
    justify?: JustifyOption;
    align?: AlignOption;
    direction?: DirectionOption;
    width?: WidthOption;
    height?: HeightOption;
    paddingX?: SpacingOption;
    paddingY?: SpacingOption;
    marginX?: SpacingOption;
    marginY?: SpacingOption;
    gap?: GapOption;
    extraClasses?: string;
    tag?: keyof HTMLElementTagNameMap;
    children?: any;
  } = $props();

  const alignMapping: Record<AlignOption, string> = {
    [AlignOption.start]: 'items-start',
    [AlignOption.end]: 'items-end',
    [AlignOption.center]: 'items-center',
    [AlignOption.baseline]: 'items-baseline',
    [AlignOption.stretch]: 'items-stretch'
  };

  const directionMapping: Record<DirectionOption, string> = {
    [DirectionOption.row]: 'flex-row',
    [DirectionOption.column]: 'flex-col',
    [DirectionOption.rowReverse]: 'flex-row-reverse',
    [DirectionOption.columnReverse]: 'flex-col-reverse'
  };

  const gapMapping: Record<GapOption, string> = {
    [GapOption.none]: 'gap-0',
    [GapOption.minimum]: 'gap-1 sm:gap-2',
    [GapOption.medium]: 'gap-2 sm:gap-4',
    [GapOption.large]: 'gap-6 sm:gap-8',
    [GapOption.maximum]: 'gap-12 sm:gap-24',
    [GapOption.default]: ''
  };

  const justifyMapping: Record<JustifyOption, string> = {
    [JustifyOption.start]: 'justify-start',
    [JustifyOption.end]: 'justify-end',
    [JustifyOption.center]: 'justify-center',
    [JustifyOption.between]: 'justify-between',
    [JustifyOption.around]: 'justify-around'
  };

  const getJustifyClass = (justify: JustifyOption): string => justifyMapping[justify];
  const getSpacingClass = (space: GapOption): string => gapMapping[space];
  const getAlignClass = (align: AlignOption): string => alignMapping[align];
  const getDirectionClass = (direction: DirectionOption): string => directionMapping[direction];

  const widthClass = getWidthClass(width ?? WidthOption.default);
  const heightClass = getHeightClass(height ?? HeightOption.default);
  const justifyClass = getJustifyClass(justify ?? JustifyOption.start);
  const alignClass = getAlignClass(align ?? AlignOption.start);
  const directionClass = getDirectionClass(direction ?? DirectionOption.row);
  const gapClass = getSpacingClass(gap ?? GapOption.default);
  const paddingXClass = getPaddingXClass(paddingX ?? SpacingOption.default);
  const paddingYClass = getPaddingYClass(paddingY ?? SpacingOption.default);
  const marginXClass = getPaddingXClass(marginX ?? SpacingOption.default);
  const marginYClass = getPaddingYClass(marginY ?? SpacingOption.default);
</script>

<svelte:element
  this={tag}
  class={clsx(
    'flex',
    widthClass,
    heightClass,
    justifyClass,
    alignClass,
    directionClass,
    gapClass,
    paddingXClass,
    paddingYClass,
    marginXClass,
    marginYClass,
    extraClasses // Figure out how to prevent this from being misused (e.g. 'flex flex-row h-12')
  )}
>
  {#if children}
    {@render children()}
  {/if}
</svelte:element>
