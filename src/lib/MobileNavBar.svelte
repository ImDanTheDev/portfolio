<script lang="ts">
	import { ChevronDown } from '@lucide/svelte';
	import links from '$lib/links';
	import nav from './nav';
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';

	let menuOpened = $state(false);

	$effect(() => {
		if (menuOpened) {
			document.body.classList.add('fixed-position');
		} else {
			document.body.classList.remove('fixed-position');
		}
	});

	onNavigate(() => {
		menuOpened = false;
	});
</script>

{#if menuOpened}
	<div
		class="absolute top-0 right-0 left-0 z-15 h-dvh bg-[#000000AA] sm:hidden"
		onclick={() => (menuOpened = false)}
	></div>
{/if}

<div
	class="sticky top-0 z-15 mx-auto flex h-[76px] max-w-[1465px] flex-row bg-black p-6 font-mono text-xl sm:hidden"
>
	<div class="box items-center">
		<div class="name mr-auto">
			<span>DANIEL MOTT</span>
		</div>
	</div>

	<div class="box relative flex flex-col items-center gap-1 px-4">
		<div class="">
			<div
				role="button"
				tabindex={-1}
				class="flex flex-row items-center gap-1"
				onclick={() => (menuOpened = !menuOpened)}
			>
				<span class="link text-[#f79337] hover:text-[#f79437c4]"
					>{nav.find(
						(x) =>
							x.url === page.url.pathname ||
							(page.url.pathname.startsWith('/project') && x.url === '/')
					)?.label || '?'}</span
				>
				<ChevronDown />
			</div>
		</div>
	</div>

	<div class="box items-center">
		<div class="ml-auto flex flex-row gap-4">
			{#each links as { url, icon: Icon }}
				<a href={url}>
					<Icon />
				</a>
			{/each}
		</div>
	</div>
</div>
<div
	class="blurry sticky top-19 z-10 mx-auto flex h-8 max-w-[1465px] flex-row font-mono text-xl sm:hidden"
></div>

{#if menuOpened}
	<div
		class="absolute top-16 right-6 left-6 z-20 flex flex-col rounded-b-xl border-x-1 border-b-1 border-white font-mono text-2xl backdrop-blur-lg sm:hidden"
	>
		<ul class="flex flex-col">
			{#each nav as link}
				<li aria-current={page.url.pathname === link.url ? 'page' : undefined}>
					<a href={link.url} class="flex flex-row p-2 px-8">{link.label}</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}

<style>
	.name {
		line-height: 1em;
	}
	.blurry {
		/*background: #00000000;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 50%);*/

		/* Or */

		background: #000000ff;
		-webkit-mask-image: -webkit-gradient(
			linear,
			left 90%,
			left bottom,
			from(rgba(0, 0, 0, 1)),
			to(rgba(0, 0, 0, 0))
		);
	}

	.box {
		flex: 1;
		display: flex;
		justify-content: center;
	}

	.box:first-child > div {
		margin-right: auto;
	}

	.box:last-child > div {
		margin-left: auto;
	}

	li[aria-current='page'] {
		@apply text-[#f79337] hover:text-[#f79437c4];
	}
</style>
