<script lang="ts">
  import Flex from '$lib/components/flex.svelte';
  import {
    AlignOption,
    DirectionOption,
    JustifyOption,
    WidthOption
  } from '$lib/utils/styles.utils';
</script>

<Flex
  align={AlignOption.center}
  direction={DirectionOption.column}
  extraClasses="py-4 sm:py-8"
  justify={JustifyOption.center}
  width={WidthOption.full}
>
  <slot />
</Flex>
