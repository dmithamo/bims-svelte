<script lang="ts">
  import { LogoSize } from '../utils/enums';
  import Logo from './logo.svelte';

  const appVersion = import.meta.env.VITE_APP_VERSION;
</script>

<footer class="footer absolute top-full bg-base-200 p-6 text-xs text-base-content">
  <aside>
    <Logo shouldClickToHome size={LogoSize.MEDIUM} />
    <p>
      Brilliant information management systems<br />Since 2024
    </p>
  </aside>

  <nav>
    <header class="footer-title">Legal</header>
    <a class="link-hover link" href="https://github.com/dmithamo" rel="noreferrer" target="_blank">
      &copy;2024 dmithamo
    </a>
    <p>This is version <kbd class="underline underline-offset-2">0.0.1-beta.{appVersion}</kbd></p>
  </nav>
</footer>
