import type { CardAction } from "./Card.svelte";

export type Post = {
    title: string,
    actions: CardAction[],
    description: string,
    date: string,
    project_showcase: boolean,
    categories: string[],
    published: boolean,
    slug: string,
}
