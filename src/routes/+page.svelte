<script lang="ts">
	import type CardProps from '$lib/Card.svelte';
	import Timeline from '$lib/Timeline.svelte';

	let { data } = $props();

	let alternate = false;
</script>

<Timeline
	items={data.posts.map((x) => {
		alternate = !alternate;
		return {
			description: x.description,
			path: x.subtitle,
			title: x.title,
			tags: x.categories,
			time: x.date,
			slug: x.slug,
			side: alternate ? 'right' : 'left'
		} as CardProps;
	})}
/>
