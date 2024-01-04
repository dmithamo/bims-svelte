<script lang="ts">
  import Flex from '$lib/components/flex.svelte';
  import Input from '$lib/components/input.svelte';
  import { AlignOption, DirectionOption, GapOption } from '$lib/utils/styles.utils';
  import clsx from 'clsx';
</script>

<div class="w-full rounded-md border p-8 shadow sm:w-[400px]">
  <h2 class="pb-8 text-2xl font-bold">Sign in to your account</h2>
  <form method="POST">
    <Flex direction={DirectionOption.column} gap={GapOption.large}>
      <Input
        label="Email address"
        name="username"
        placeholder="Enter your email address"
        type="text"
      />

      <Input label="Password" name="password" placeholder="Enter your password" type="password" />

      <button class={clsx('btn btn-primary mt-3 w-full uppercase')}>
        <Flex gap={GapOption.medium} align={AlignOption.center}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-6 w-6"
          >
            <path
              d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"
            />
          </svg>

          <span class="text-lg">Sign in</span>
        </Flex>
      </button>

      <a class="text-slate-400 underline underline-offset-4" href="/forgot-password"
        >Forgot your password?</a
      >
    </Flex>
  </form>
</div>
