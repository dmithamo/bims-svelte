<script lang="ts">
  import Flex from '$lib/components/flex.svelte';
  import Footer from '$lib/components/footer.svelte';
  import {
    AlignOption,
    DirectionOption,
    JustifyOption,
    WidthOption
  } from '$lib/utils/styles.utils';
  let { children }: { children?: any } = $props();
</script>

<Flex
  align={AlignOption.center}
  direction={DirectionOption.column}
  justify={JustifyOption.center}
  width={WidthOption.full}
  extraClasses="p-4 sm:p-6"
>
  {#if children}
    {@render children()}
  {/if}
</Flex>

<Footer />
