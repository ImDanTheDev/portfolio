<script lang="ts">
	import { ArrowUp } from '@lucide/svelte';
	import type { CardProps } from './Card.svelte';
	import Card from './Card.svelte';

	// type Props = {
	// 	subtitle?: string;
	// 	title: string;
	// 	content: string;
	// 	tags: string[];
	// };
	// let { subtitle, title, content, tags }: Props = $props();

	type Props = {
		items: CardProps[];
	};

	let { items } = $props();
</script>

<div class="hidden h-full flex-row gap-[57px] overflow-hidden px-6 pt-10 sm:flex lg:gap-[121px]">
	<div class="flex h-full shrink-1 basis-[50%] flex-col items-end gap-16">
		{#each items.filter((x: CardProps) => x.side === 'left') as item}
			<Card {...item} />
			<div class="h-0"></div>
		{/each}
	</div>
	<div class="flex shrink-1 basis-[50%] flex-col items-start gap-16">
		<div class="h-10"></div>
		{#each items.filter((x: CardProps) => x.side === 'right') as item}
			<Card {...item} />
			<div class="h-0"></div>
		{/each}
	</div>
</div>

<div
	class="mx-auto mb-6 hidden h-16 w-16 items-center justify-center rounded-full border-3 text-2xl font-bold sm:flex"
	onclick={() => {
		window.scrollTo(0, 0);
	}}
>
	<ArrowUp class="mx-auto" size={50} />
</div>

<div class="flex flex-col gap-10 py-2 pr-8 pl-4 sm:hidden">
	{#each items as item, i}
		<Card {...item} side="left-alt" topConnector={i !== 0} />
	{/each}
</div>
<div
	class="mt-2 mr-[14px] mb-5 ml-auto flex h-16 w-16 items-center justify-center rounded-lg border-3 text-2xl font-bold sm:hidden"
	onclick={() => {
		window.scrollTo(0, 0);
	}}
>
	<ArrowUp class="mx-auto" size={50} />
	<div class="relative right-[-3px] -mt-2 mb-auto h-6 w-[3px] bg-white"></div>
</div>
