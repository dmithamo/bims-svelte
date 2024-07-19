<script lang="ts">
  import Flex from '$lib/components/flex.svelte';
  import {
    AlignOption,
    DirectionOption,
    GapOption,
    HeightOption,
    JustifyOption,
    WidthOption
  } from '$lib/utils/styles.utils';
</script>

<Flex
  align={AlignOption.center}
  direction={DirectionOption.column}
  extraClasses="p-4 sm:p-6 text-md"
  height={HeightOption.full}
  justify={JustifyOption.center}
  width={WidthOption.full}
>
  <Flex align={AlignOption.center} gap={GapOption.large}>
    <span class="iconify h-32 w-32 text-gray-400" data-icon="icon-park-outline:worker"></span>
    <div>
      <p class="mb-4">We are hard at work building this page, and others just like it &trade;</p>
      <a class="underline underline-offset-4" href="/">Click here, in the meantime</a>
    </div>
  </Flex>
</Flex>
