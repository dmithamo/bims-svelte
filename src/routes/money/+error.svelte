<script lang="ts">
  import { page } from '$app/stores';
  import ErrorAlert from '$lib/components/alerts/error.alert.svelte';
  import Flex from '$lib/components/flex.svelte';
  import {
    AlignOption,
    DirectionOption,
    HeightOption,
    JustifyOption,
    WidthOption
  } from '$lib/utils/styles.utils';
</script>

{#if $page?.error?.code === 'UNAUTHORIZED'}
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
    <button on:click={() => history.back()} class="btn btn-link">Go back</button>
  </Flex>
{:else}
  <ErrorAlert message={$page?.error?.message ?? ''} />
{/if}
