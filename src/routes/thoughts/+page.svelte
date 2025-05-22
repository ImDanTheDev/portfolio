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
	<span class="mx-auto text-zinc-400">
		I'm not much of a writer, so consider yourself lucky if there's anything of substance here. 😃
	</span>
</div>

<Timeline {items} />
