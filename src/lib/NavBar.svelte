<script lang="ts">
	import { Linkedin, Github } from '@lucide/svelte';
</script>

<div
	class="sticky top-0 z-10 mx-auto hidden h-[76px] max-w-[1465px] flex-row bg-black p-6 font-mono text-xl sm:flex"
>
	<div class="box items-center">
		<div class="name mr-auto">
			<span>DANIEL MOTT</span>
		</div>
	</div>

	<div class="box items-center gap-6 px-4 text-nowrap">
		<a href="/" class="link text-[#f79337] hover:text-[#f79437c4]">PROJECTS</a>
		<span class="select-none">//</span>
		<a href="/resume" class="link">RESUME</a>
		<span class="select-none">//</span>
		<a href="/thoughts" class="link">THOUGHTS</a>
	</div>

	<div class="box items-center">
		<div class="ml-auto flex flex-row gap-4">
			<a href="#linkedin"><Linkedin /></a>
			<a href="#github"><Github /></a>
		</div>
	</div>
</div>
<div
	class="blurry sticky top-19 z-10 mx-auto hidden h-8 max-w-[1465px] flex-row font-mono text-xl sm:flex"
></div>

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

	.link:hover {
		filter: brightness(85%);
		transform: translateY(1px);
	}
</style>
