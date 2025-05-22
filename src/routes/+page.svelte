<script lang="ts">
	import type CardProps from '$lib/Card.svelte';
	import Timeline from '$lib/Timeline.svelte';

	let { data } = $props();

	let alternate = false;
</script>

<div class="mx-auto max-w-xl px-6 pb-6">
	<p class="text-zinc-400">
		Below is a timeline of some of my projects. Each project has a corresponding page dedicated to
		it, so click on any of them for a <i>chance</i> at learning more about the project.
	</p>
</div>

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
