<script lang="ts">
  import { enhance } from '$app/forms';
  import ErrorAlert from '$lib/components/alerts/error-alert.svelte';
  import Flex from '$lib/components/flex.svelte';
  import Input from '$lib/components/input.svelte';
  import { AlignOption, DirectionOption, GapOption } from '$lib/utils/styles.utils';
  import clsx from 'clsx';
  import type { ActionData, PageData } from './$types';
  import { AppIcon } from '$lib/utils/enums';
  import { defaultIconSize } from '$lib/utils/styles.utils.js';

  export let data: PageData;
  export let form: ActionData;
</script>

<div class="w-full rounded-md border p-8 shadow-md sm:w-[400px]">
  <h2 class="text-2xl font-bold">Sign in to your account</h2>

  <div class={clsx('w-full', { 'py-4': form?.invalidCredentials })}>
    {#if form?.invalidCredentials && form?.submitted}
      <ErrorAlert message="Invalid credentials" />
    {/if}
  </div>

  <form action="?/login" method="POST" use:enhance>
    <Flex direction={DirectionOption.column} extraClasses="py-8" gap={GapOption.large}>
      <Input
        label="Email address"
        name="username"
        placeholder="Enter your email address"
        required
        type="email"
        value={form?.username?.toString() ?? ''}
      />

      <Input
        label="Password"
        name="password"
        placeholder="Enter your password"
        required
        type="password"
      />

      <button class={clsx('btn btn-primary mt-3 w-full uppercase')}>
        <Flex align={AlignOption.center} gap={GapOption.medium}>
          <span class={clsx('iconify', defaultIconSize)} data-icon={AppIcon.login} />

          <span class="">Sign in</span>
        </Flex>
      </button>
    </Flex>
  </form>
  <a class="text-slate-400 underline underline-offset-4" href="/forgot-password"
    >Forgot your password?</a
  >
</div>
