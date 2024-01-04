<script lang="ts">
  import Flex from '$lib/components/flex.svelte';
  import { DirectionOption, GapOption } from '$lib/utils/styles.utils';
  import Input from '$lib/components/input.svelte';
</script>

<div class="w-full rounded p-4 shadow sm:w-[400px]">
  <h2 class="py-4 text-2xl font-bold">Login to your account</h2>
  <form>
    <Flex direction={DirectionOption.column} gap={GapOption.large}>
      <Input
        label="Email address"
        name="username"
        placeholder="Enter your email address"
        type="text"
      />

      <label for="username">
        <strong class="text-sm font-bold">Email address</strong>
        <input name="username" placeholder="Enter your email address" type="text" />
      </label>

      <label for="password">
        <small class="inline-block text-sm font-bold">Password</small>
        <input name="password" placeholder="Enter your password" type="password" />
      </label>
    </Flex>
  </form>
</div>
