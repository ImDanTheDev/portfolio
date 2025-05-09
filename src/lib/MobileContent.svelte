<script lang="ts">
	import { ArrowUp } from '@lucide/svelte';
	import Card from './Card.svelte';
</script>

<div class="flex flex-col gap-10 py-2 pr-8 pl-4 sm:hidden">
	<Card
		path="~/game_dev/chaos"
		title="Chaos"
		description="This is a game about harnessing chaos to destroy thriving colonies of life. Use chaos to hinder and reverse natural evolution."
		side="left-alt"
		time="3 days ago"
		tags={['game dev', 'odin', '2d']}
	/>
	<Card
		path="~/web_dev/portfolio"
		title="Portfolio"
		description="Developed with Svelte and Tailwind, this website exists to showcase any projects that I think are worth sharing. There might not be much here, especially finished projects, but it's something. Besides projects, my resume can be found up top alongside a blog for random thoughts or more inforamtion about my projects."
		side="left-alt"
		time="2 weeks ago"
		tags={['web dev', 'svelte', 'typescript']}
		topConnector
	/>
	<Card
		path="~/hardware/keypad"
		title="CrabPad"
		description="A successful first attempt at designing a custom pcb and getting it manufactured. This is a 3x3 keypad using hotswappable mechanical keyboard switches, accompanied with a dial and a mini oled screen. Powered by an rp2040, this keypad runs custom firmware written in Rust and embassy-rs."
		side="left-alt"
		time="3 weeks ago"
		tags={['rust', 'embedded', 'pcb design', '3d printing']}
		topConnector
	/>
	<Card
		path="~/web_dev/underbudgetgames.com"
		title="UBG"
		description="A project showcase, blog, and information site for my indie game studio, Underbudget Games. Despite having never shipped a game outside of gamejams, here you will find updates of what we are working. That is, if we ever actually had news to share and didn't change projects every day. :)"
		side="left-alt"
		time="1 month ago"
		tags={['web dev', 'next.js', 'typescript']}
		topConnector
	/>
	<Card
		path="~/web_dev/crab_deck"
		title="CrabDeck"
		description="My Elgato Stream Deck stopped working one day, and so rather than buying a new one, I tried designing and building my own. It's powered by a Raspberry Pi equipped with a small touchscreen, and housed in a custom designed and 3d printed housing. Custom poured resin button caps are embedded inside a flexible silicone layer for tactile feedback when using the touchscreen."
		side="left-alt"
		time="1 month ago"
		tags={['rust', 'raspberry pi', '3d printing']}
		topConnector
	/>
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
