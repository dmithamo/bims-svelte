<script lang="ts">
  // Check for auth status
  import clsx from 'clsx';
  import Logo from '$lib/components/logo.svelte';
  import { LogoSize } from '$lib/utils/enums';
  import Flex from '$lib/components/flex.svelte';
  import {
    DirectionOption,
    HeightOption,
    JustifyOption,
    WidthOption
  } from '$lib/utils/styles.utils';
</script>

<header class={clsx('h-full shadow')}>
  <Flex
    direction={DirectionOption.row}
    height={HeightOption.full}
    justify={JustifyOption.between}
    width={WidthOption.full}
  >
    <Logo size={LogoSize.LARGE} />
  </Flex>
</header>
