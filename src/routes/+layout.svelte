<script lang="ts">
	import MobileNavBar from '$lib/MobileNavBar.svelte';
	import NavBar from '$lib/NavBar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<NavBar />
<MobileNavBar />
{@render children()}
