<script lang="ts">
  const isAuthenticated = false;
  import Logo from '$lib/components/logo.svelte';
  import { LogoSize } from '$lib/utils/enums';
  import Flex from '$lib/components/flex.svelte';
  import {
    AlignOption,
    DirectionOption,
    HeightOption,
    JustifyOption,
    WidthOption
  } from '$lib/utils/styles.utils';
</script>

<Flex
  align={AlignOption.center}
  direction={DirectionOption.row}
  extraClasses="shadow px-2 sm:px-4"
  height={HeightOption.full}
  justify={JustifyOption.between}
  width={WidthOption.full}
>
  <Logo shouldClickToHome={isAuthenticated} size={LogoSize.LARGE} />
</Flex>
