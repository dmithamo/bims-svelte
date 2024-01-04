<script lang="ts">
  import Flex from '$lib/components/flex.svelte';
  import Footer from '$lib/components/footer.svelte';
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
  justify={JustifyOption.center}
  width={WidthOption.full}
  extraClasses="p-4 sm:p-6"
>
  <slot />
</Flex>

<Footer />
