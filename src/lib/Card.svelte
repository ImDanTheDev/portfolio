<script lang="ts">
	import { Github, Globe, BookOpenText, Link } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	export type CardSide = 'left' | 'right' | 'left-alt';
	export type CardProps = {
		side: CardSide;
		title: string;
		description: string;
		time: string;
		tags: string[];
		topConnector?: boolean;
		slug: string;
		actions: CardAction[];
	};
	export type CardAction =
		| {
				kind: 'website' | 'github';
				url: string;
		  }
		| {
				kind: 'blog';
		  };

	let { side, title, description, actions, time, tags, topConnector, slug }: CardProps = $props();
</script>

<div
	class="card relative flex max-w-[648px] flex-col rounded-lg border-2 border-white font-mono backdrop-blur-[1px]"
>
	{#if side == 'left' || side == 'left-alt'}
		<span class="absolute -top-6 right-2 text-sm text-nowrap text-zinc-400">{time}</span>
	{:else if side == 'right'}
		<span class="absolute -top-6 left-2 text-sm text-nowrap text-zinc-400">{time}</span>
	{/if}
	<div class="card-inner p-2">
		<div class="flex flex-row justify-between text-lg">
			<span>{title}</span>
			<div class="flex flex-row gap-2">
				<span class="my-auto text-sm font-bold text-zinc-400 sm:hidden md:flex">See More:</span>
				{#each actions as action}
					{#if action.kind === 'github'}
						<a href={action.url} class="card-action" title="GitHub"><Github /></a>
					{:else if action.kind === 'website'}
						<a href={action.url} class="card-action" title="Visit"><Link /></a>
					{:else if action.kind === 'blog'}
						<a href={`/project/${slug}`} class="card-action" title="Blog Post"><BookOpenText /></a>
					{/if}
				{/each}
			</div>
		</div>
		<span class="text-zinc-400">
			{description}
		</span>

		<div class="flex flex-row flex-wrap gap-1 pt-2">
			{#each tags as tag}
				<div
					class="shrink-0 grow-0 rounded-full bg-[#f79337] px-2 text-sm font-bold text-[#573515]"
				>
					{tag}
				</div>
			{/each}
		</div>
	</div>
	{#if side == 'left'}
		<div
			class="absolute top-4 -right-8 h-[100vh] w-8 rounded-tr-full border-t-3 border-r-3 border-white lg:-right-16 lg:w-16"
		>
			<div class="dot absolute -top-2 h-4 w-2 rounded-r-full bg-white"></div>
		</div>
	{:else if side == 'left-alt'}
		{#if topConnector}
			<div
				class="absolute -top-7 -right-5 z-30 h-16 border-t-3 border-r-3 border-white lg:-right-16 lg:w-16"
			></div>
		{/if}
		<div
			class="absolute top-4 -right-5 h-full w-5 rounded-tr-full border-t-3 border-r-3 border-white lg:-right-16 lg:w-16"
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

<style>
	.card-action {
		/* -webkit-box-shadow: 0px 0px 8px 3px rgba(247, 148, 55, 0);
		-moz-box-shadow: 0px 0px 8px 3px rgba(247, 148, 55, 0);
		box-shadow:
			0px 0px 8px 3px rgba(247, 148, 55, 0),
			inset 0px 0px 6px 1px rgba(247, 148, 55, 0);
		transition: box-shadow 1.6s cubic-bezier(0.16, 1, 0.3, 1); */
		transition: color 1.6s cubic-bezier(0.16, 1, 0.3, 1);
		color: white;
	}

	.card-action:hover {
		/* -webkit-box-shadow: 0px 0px 8px 3px rgba(247, 148, 55, 0.9);
		-moz-box-shadow: 0px 0px 8px 3px rgba(247, 148, 55, 0.9);
		box-shadow:
			0px 0px 8px 3px rgba(247, 148, 55, 0.7),
			inset 0px 0px 6px 1px rgba(247, 148, 55, 0.7);
		transition: box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1); */
		transition: color 0.6s cubic-bezier(0.16, 1, 0.3, 1);
		color: #f79337;
	}
</style>
