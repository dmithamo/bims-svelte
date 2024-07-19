<script lang="ts">
  import { page } from '$app/stores';
  import ErrorAlert from '$lib/components/alerts/error-alert.svelte';
  import Flex from '$lib/components/flex.svelte';
  import Footer from '$lib/components/footer.svelte';
  import { AppErrorCode } from '$lib/utils/enums';
  import {
    AlignOption,
    DirectionOption,
    GapOption,
    HeightOption,
    JustifyOption,
    WidthOption
  } from '$lib/utils/styles.utils';
</script>

{#if $page?.error?.code === AppErrorCode.NOT_FOUND}
  <Flex
    direction={DirectionOption.column}
    align={AlignOption.center}
    justify={JustifyOption.center}
    width={WidthOption.full}
    height={HeightOption.full}
    extraClasses="p-4 sm:p-6"
  >
    <Flex gap={GapOption.large} align={AlignOption.center}>
      <span class="iconify h-32 w-32 text-gray-400" data-icon="tabler:error-404"></span>
      <div>
        <p class="mb-4">Whatever you were looking for does not exist (yet, or any more) &trade;</p>
        <a
          href="#nowhere"
          on:click={(e) => {
            e.preventDefault();
            history.back();
          }}
          class="underline underline-offset-4">Click here to find your way</a
        >
      </div>
    </Flex>
  </Flex>
{:else}
  <ErrorAlert message={$page?.error?.message ?? ''} />
{/if}
<Footer />
