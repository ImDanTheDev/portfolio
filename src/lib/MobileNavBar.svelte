<script lang="ts">
	import { Linkedin, Github, ChevronDown } from '@lucide/svelte';
</script>

<div
	class="sticky top-0 z-10 mx-auto flex h-[76px] max-w-[1465px] flex-row bg-black p-6 font-mono text-xl sm:hidden"
>
	<div class="box items-center">
		<div class="name mr-auto">
			<span>DANIEL MOTT</span>
		</div>
	</div>

	<div class="box flex flex-col items-center gap-1 px-4">
		<div class="group flex flex-row justify-center gap-1">
			<label for="side-menu" class="flex flex-row items-center"
				><span class="link text-[#f79337] hover:text-[#f79437c4]">PROJECTS</span>
				<ChevronDown /></label
			>
			<input id="side-menu" class="flex hidden flex-row items-center" type="checkbox" />
		</div>
		<div class="hidden flex-col group-has-[:checked]:flex">
			<span>RESUME</span>
			<span>THOUGHTS</span>
		</div>
		<!-- <span class="select-none">//</span>
		<a href="#resume" class="link">RESUME</a>
		<span class="select-none">//</span>
		<a href="#thoughts" class="link">THOUGHTS</a> -->
	</div>

	<div class="box items-center">
		<div class="ml-auto flex flex-row gap-4">
			<a href="#linkedin"><Linkedin /></a>
			<a href="#github"><Github /></a>
		</div>
	</div>
</div>
<div
	class="blurry sticky top-19 z-10 mx-auto flex h-8 max-w-[1465px] flex-row font-mono text-xl sm:hidden"
></div>

<style>
	.name {
		line-height: 1em;
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

	.link:hover {
		filter: brightness(85%);
		transform: translateY(1px);
	}
</style>
