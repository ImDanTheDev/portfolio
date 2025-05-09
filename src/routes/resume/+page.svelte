<script lang="ts">
	import PdfViewer from 'svelte-pdf';
</script>

<div class="px-6 pb-6">
	<div
		class="mx-auto flex max-w-3xl flex-col rounded-lg border-2 border-white p-2 font-mono backdrop-blur-[1px]"
	>
		<div class="flex flex-row justify-between text-lg">
			<span>"~/resume"</span>
			<span>Resume</span>
		</div>
		<PdfViewer
			url="/Daniel_Mott_Resume.pdf"
			showButtons={[]}
			showBorder={false}
			showTopButton={false}
		/>
	</div>
</div>
