---
title: Portfolio
subtitle: ~/web_dev/portfolio
description: Developed with Svelte and Tailwind, this website exists to showcase any projects that I think are worth sharing. There might not be much here, especially finished projects, but it's something. Besides projects, my resume can be found up top alongside a blog for random thoughts or more inforamtion about my projects.
date: '2025-5-8'
project_showcase: true
categories:
  - web dev
  - svelte
  - typescript
published: true
---

# Getting Started
My first ever portfolio website. I designed and developed it with the intention of keeping things relatively simple in appearance, but still adding some personalized style.

From the start, I wanted the site to be a place to share some of my more complete (if you could even call them that) projects, host my resume, and maybe a small blog in case I ever felt like writing about things beyond just project updates.

After a bit of brainstorming, I opened my self-hosted [Penpot](https://penpot.app/) instance and sketched a rough visual of what I had in mind. I wasn't aiming for a fully planned, implementation-ready design—just something to capture the vision before I inevitably forget it when I wake up the next day. So, here's what I came up with:

![portfolio penpot design](/portfolio_penpot_design.png)

The design borrows some elements from Linux terminals such as the mostly meaningless paths in each project card. The orange pill-shaped tags are used to highlight a few key concepts in each project. Eventually, I want to use these tags as a way to search and filter through posts.

# The Build
As you might've noticed in the tags for this project, I used SvelteKit, along with some other libraries to help make this site. Realistically, all of these fancy libraries are entirely unnecessary given the simple nature of this site, but I decided to use them out of familiarity and to gain a little more experience with the tech stack.

Although I could've written these simple blog posts as standard Svelte pages, I decided to borrow an idea from my game studio's website, [underbudgetgames.com](https://underbudgetgames.com). That one was built with Next.js, so the exact implementation is a bit different, but by using mdsvex, I can write all my blog posts in Markdown and have them automatically turned into Svelte pages at build time. I don't use most of the fancy features provided by mdsvex, but down the line I probably will use some, like embedding Svelte components directly into Markdown.

# Tech Stack

As you might have seen on the [main thoughts page](/thoughts), I'm not much of a writer, so now here comes the part where I lose interest in writing, and spew out the remaining details involved in making this website.
- Built with: SvelteKit, TypeScript, Tailwind, Lucide Icons, Markdown, and Bun
- Edited in: VS Code
- Hosted on: Vercel (for free!)
- Version Control: Git