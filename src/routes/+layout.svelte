<script>
	import '../app.pcss';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<input type="checkbox" class="toggle fixed bottom-1 right-1" data-toggle-theme="emerald,dim" />
<slot />
