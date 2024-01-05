<script lang="ts">
  import { page } from '$app/stores';
  import ErrorAlert from '$lib/components/alerts/error-alert.svelte';
  import Flex from '$lib/components/flex.svelte';
  import {
    AlignOption,
    DirectionOption,
    HeightOption,
    JustifyOption,
    WidthOption
  } from '$lib/utils/styles.utils';
  import { AppErrorCode } from '$lib/utils/enums';
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
    <h1 class="text-2xl font-bold">404</h1>
    <p class="text-sm">Whatever you were looking for does not exist &trade;</p>
    <a
      href="#nowhere"
      on:click={(e) => {
        e.preventDefault();
        history.back();
      }}
      class="link-hover link">Go back</a
    >
  </Flex>
{:else}
  <ErrorAlert message={$page?.error?.message ?? ''} />
{/if}
