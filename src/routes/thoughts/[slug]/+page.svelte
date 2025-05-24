<script lang="ts">
	let { data } = $props();
</script>

<div class="px-6">
	<div class="mx-auto flex max-w-4xl flex-col gap-1 rounded-lg border-2 border-white p-2">
		<h1 class="text-3xl">{data.meta.title}</h1>
		<div class="flex flex-row gap-2 pb-3">
			<p class="text-zinc-400">{data.meta.date}</p>

			<div class="flex flex-row flex-wrap items-center gap-1">
				{#each data.meta.categories as category}
					<div
						class="shrink-0 grow-0 rounded-full bg-[#f79337] px-2 text-sm font-bold text-[#573515]"
					>
						{category}
					</div>
				{/each}
			</div>
		</div>
		<div
			class="text-lg [&_a]:text-[#f79337] [&_a]:hover:underline [&_h1]:mb-2 [&_h1]:text-2xl [&_h1]:font-bold [&_img]:rounded-lg [&_img]:p-4 [&_img]:outline [&_img]:outline-zinc-700 [&_p]:mb-4"
		>
			<data.content />
		</div>
	</div>
</div>
