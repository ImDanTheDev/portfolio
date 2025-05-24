<script lang="ts">
	import type { CardProps } from '$lib/Card.svelte';
	import Timeline from '$lib/Timeline.svelte';

	let { data } = $props();

	let alternate = false;

	let items = data.posts.map((x) => {
		let data: CardProps = {
			title: x.title,
			description: x.description,
			time: x.date,
			tags: x.categories,
			path: x.subtitle,
			slug: x.slug,
			side: alternate ? 'right' : 'left'
		};
		alternate = !alternate;
		return data;
	});
</script>

<div class="mx-auto max-w-xl px-6 pb-6">
	<p class="text-zinc-400">
		Below is a timeline of some of my projects. Each project has a corresponding page dedicated to
		it, so click on any of them for a <i>chance</i> at learning more about the project.
	</p>
</div>

<Timeline {items} />
