<script lang="ts">
  const isAuthenticated = true;
  import Flex from '$lib/components/flex.svelte';
  import Logo from '$lib/components/logo.svelte';
  import { LogoSize } from '$lib/utils/enums';
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
  extraClasses="shadow p-3"
  height={HeightOption.full}
  justify={JustifyOption.between}
  width={WidthOption.full}
>
  <Logo shouldClickToHome={isAuthenticated} size={LogoSize.LARGE} />
  {#if isAuthenticated}
    <span class="iconify h-8 w-8" data-icon="carbon:user-avatar-filled"></span>{/if}
</Flex>
