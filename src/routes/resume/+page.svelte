<script lang="ts">
	import PdfViewer from 'svelte-pdf';
</script>

<div class="mx-auto flex max-w-3xl flex-col gap-2 px-6 pb-6">
	<span class="text-sm">
		Want a copy? Download [<a class="text-[#f79337] hover:underline" href="/Daniel_Mott_Resume.pdf"
			>PDF</a
		>] | [<a class="text-[#f79337] hover:underline" href="Daniel_Mott_Resume.docx">DOCX</a>]
	</span>
	<div
		class="relative flex flex-col gap-2 rounded-lg border-2 border-white p-2 font-[garamond] text-sm backdrop-blur-[1px]"
	>
		<div class="flex flex-col">
			<span class="absolute -top-6 right-2 font-mono text-sm text-nowrap text-zinc-400"
				>2025-5-5</span
			>
			<span class="mx-auto text-xl font-bold">DANIEL MOTT</span>
			<span class="mx-auto"
				>Columbus, OH | P: +1 614 816 9130 | dmott248@gmail.com | <a
					href="https://imdanthe.dev"
					class="text-[#f79337] hover:underline">Portfolio</a
				>
				|
				<a href="https://www.linkedin.com/in/m-dan/" class="text-[#f79337] hover:underline"
					>LinkedIn</a
				>
				|
				<a href="https://github.com/ImDanTheDev" class="text-[#f79337] hover:underline">GitHub</a
				></span
			>
		</div>
		<div class="flex flex-col gap-2">
			<span class="border-b-1 border-b-white text-lg font-bold text-zinc-300">EDUCATION</span>
			<div>
				<div class="flex flex-row justify-between">
					<span class="text-base font-bold text-zinc-300">FRANKLIN UNIVERSITY</span>
					<span>Columbus, OH</span>
				</div>
				<div class="flex flex-row justify-between">
					<span class="text-zinc-300">Bachelor of Computer Science</span>
					<span>2018 – 2021</span>
				</div>
				<p>Major in Computer Science</p>
				<p>
					Cumulative GPA: 3.96/4.0; Summa Cum Laude; President's List 7 semesters; Dean’s List 1
					semester
				</p>
				<p>
					Relevant Coursework: Data Structures, Object-Oriented Design, Operating Systems,
					Algorithms, Software Engineering
				</p>
			</div>
		</div>
		<br />
		<div class="flex flex-col gap-2">
			<span class="border-b-1 border-b-white text-lg font-bold text-zinc-300">WORK EXPERIENCE</span>
			<div>
				<div class="flex flex-row justify-between">
					<span class="text-base font-bold text-zinc-300">BORSO ROOFING</span>
					<span>Remote; Columbus, OH</span>
				</div>
				<div class="flex flex-row justify-between">
					<span>Frelance Full Stack Software Developer</span>
					<span>2023 – Present</span>
				</div>
				<ol class="list-inside list-disc">
					<li>
						Built a WordPress site with a custom theme and plugin using Typescript, React, and PHP,
						starting their online presence.
					</li>
					<li>Manage and maintain WordPress site, ensuring optimal performance and security.</li>
				</ol>
			</div>
			<br />
			<div>
				<div class="flex flex-row justify-between">
					<span class="text-base font-bold text-zinc-300"
						>CALLIBRITY <span class="font-normal text-zinc-300"
							>(software consultancy with middle-market & enterprise clients)</span
						></span
					>
					<span>Remote; Cincinnati, OH</span>
				</div>
				<div class="flex flex-row justify-between">
					<span>Full Stack Software Developer Associate</span>
					<span>2022</span>
				</div>
				<ol class="list-inside list-disc">
					<li>
						Migrated legacy job lead processing and integration with a new CRM platform, increasing
						performance and maintainability.
					</li>
					<li>
						Designed and built an admin dashboard, increasing efficiency of administrative tasks and
						handling of support tickets.
					</li>
					<li>
						Increased efficiency and accuracy of an email scraper and improved email type
						identification.
					</li>
					<li>
						Built a cross-site and responsive navigation bar and menu system based on UI mockups.
					</li>
					<li>
						Continuously maintained and reviewed code and infrastructure for bugs, security
						concerns, and general improvements.
					</li>
					<li>
						Resolved help-desk tickets, and turned client requests into actionable user stories.
					</li>
				</ol>
			</div>
		</div>
		<br />
		<div class="flex flex-col gap-2">
			<span class="border-b-1 border-b-white text-lg font-bold text-zinc-300"
				>UNIVERSITY PROJECTS</span
			>
			<div>
				<div class="flex flex-row justify-between">
					<span class="text-base font-bold text-zinc-300"
						>SURVEY CREATION AND COLLECTION WEBSITE</span
					>
					<span>Mar 2021</span>
				</div>
				<ol class="list-inside list-disc">
					<li>
						Designed and implemented a survey creation and collection website using React and
						ASP.Net Core with survey options including multiple choice and text responses, access
						control, time limits, anonymous responses, limited submissions.
					</li>
					<li>Included a user dashboard to manage surveys and view responses.</li>
					<li>
						Extended to include an administration dashboard to manage all surveys and user accounts.
					</li>
				</ol>
			</div>
			<br />
			<div>
				<div class="flex flex-row justify-between">
					<span class="text-base font-bold text-zinc-300">WEB ASSEMBLY INTERPRETER</span>
					<span>Mar 2020</span>
				</div>
				<ol class="list-inside list-disc">
					<li>
						Designed and implemented a bytecode interpreter in C for a simplified WebAssembly
						specification.
					</li>
					<li>
						Developed a code generation step to transform a syntax tree into either equivalent Java
						code or WebAssembly bytecode.
					</li>
					<li>
						Extended interpreter to support multi-threaded execution with three available
						schedulers: Coop, Preemptive, Priority.
					</li>
				</ol>
			</div>
			<br />
			<div>
				<div class="flex flex-row justify-between">
					<span class="text-base font-bold text-zinc-300"
						>4-WAY INTERSECTION TRAFFIC SIMULATOR IN ASSEMBLY</span
					>
					<span>Sept 2019</span>
				</div>
				<ol class="list-inside list-disc">
					<li>
						Designed and implemented a 4-way traffic intersection simulation in assembly using an
						online simulator, Little Man Computer.
					</li>
					<li>
						Optimized code instructions and memory usage to fit in just under 100 bytes by
						overwriting initialization instructions that are no longer necessary after startup with
						runtime data.
					</li>
				</ol>
			</div>
		</div>
		<br />
		<div class="flex flex-col gap-2">
			<span class="border-b-1 border-b-white text-lg font-bold text-zinc-300">ACTIVITIES</span>
			<div>
				<div class="flex flex-row justify-between">
					<span class="text-base font-bold text-zinc-300">BUSINESS PROFESSIONALS OF AMERICA</span>
					<span>Columbus, OH</span>
				</div>
				<div class="flex flex-row justify-between">
					<span class="text-zinc-300">Member through Eastland Career Center</span>
					<span>2016 – 2018</span>
				</div>
				<ol class="list-inside list-disc">
					<li>
						Regional Competitions: 1st place in SQL, 2nd place in C#, and 2nd place in Java
						programming.
					</li>
					<li>State Competitions: Top 10 in C# programming.</li>
				</ol>
			</div>
		</div>

		<br />
		<div class="flex flex-col gap-2">
			<span class="border-b-1 border-b-white text-lg font-bold text-zinc-300">ADDITIONAL</span>
			<div>
				<span class="font-bold">Technical Skills:</span>
				<span>Advanced in C# .NET, Rust, Typescript, Javascript, HTML/CSS, React, Svelte, Java</span
				>
			</div>
		</div>
	</div>
</div>
