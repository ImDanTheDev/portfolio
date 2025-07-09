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
			actions: x.actions,
			slug: x.slug,
			side: alternate ? 'right' : 'left'
		};
		alternate = !alternate;
		return data;
	});
</script>

<div class="mx-auto max-w-xl px-6 pb-6">
	<p class="text-zinc-400">
		Below are some of my many projects and information about each of them. Some projects might not
		have extra information, but others may have links to their GitHub repo, deployment, or even a
		blog post. Be sure to checkout the icons in the corner to see what's available.
	</p>
</div>

<Timeline {items} />
