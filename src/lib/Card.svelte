<script lang="ts">
	type CardSide = 'left' | 'right';
	type CardProps = {
		side: CardSide;
		title: string;
		description: string;
		path: string;
		time: string;
		tags: string[];
	};
	let { side, title, description, path, time, tags }: CardProps = $props();
</script>

<div
	class="relative flex max-w-[648px] flex-col rounded-lg border-2 border-white p-2 font-mono backdrop-blur-[1px]"
>
	{#if side == 'left'}
		<span class="absolute -top-6 right-2 text-sm text-nowrap text-zinc-400">{time}</span>
	{:else if side == 'right'}
		<span class="absolute -top-6 left-2 text-sm text-nowrap text-zinc-400">{time}</span>
	{/if}
	<div class="flex flex-row justify-between text-lg">
		<span>{path}</span>
		<span>({title})</span>
	</div>
	<span class="text-zinc-400">
		{description}
	</span>
	<div class="flex flex-row flex-wrap gap-1 pt-2">
		{#each tags as tag}
			<div class="shrink-0 grow-0 rounded-full bg-[#f79337] px-2 text-sm font-bold text-[#573515]">
				{tag}
			</div>
		{/each}
	</div>

	{#if side == 'left'}
		<div
			class="absolute top-4 -right-8 h-[100vh] w-8 rounded-tr-full border-t-3 border-r-3 border-white lg:-right-16 lg:w-16"
		>
			<div class="dot absolute -top-2 h-4 w-2 rounded-r-full bg-white"></div>
		</div>
	{:else if side == 'right'}
		<div
			class="absolute top-4 -left-8 h-100 w-8 rounded-tl-full border-t-3 border-l-3 border-white lg:-left-16 lg:w-16"
		>
			<div class="absolute -top-2 right-0 h-4 w-2 rounded-l-full bg-white"></div>
		</div>
	{/if}
</div>
