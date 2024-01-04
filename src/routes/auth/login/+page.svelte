<script lang="ts">
  import Flex from '$lib/components/flex.svelte';
  import Input from '$lib/components/input.svelte';
  import { DirectionOption, GapOption } from '$lib/utils/styles.utils';
</script>

<div class="w-full rounded p-4 py-8 shadow sm:w-[400px]">
  <h2 class="pb-8 text-2xl font-bold">Login to your account</h2>
  <form>
    <Flex direction={DirectionOption.column} gap={GapOption.large}>
      <Input
        label="Email address"
        name="username"
        placeholder="Enter your email address"
        type="text"
      />

      <Input label="Password" name="password" placeholder="Enter your password" type="password" />
    </Flex>
  </form>
</div>
