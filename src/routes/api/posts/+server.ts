import { json } from '@sveltejs/kit'
import type { Post } from '$lib/types'

async function getPosts(onlyShowcased: boolean) {
    let posts: Post[] = []

    const paths = import.meta.glob('/src/posts/*.md', { eager: true })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split('/').at(-1)?.replace('.md', '')

        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>
            const post = { ...metadata, slug } satisfies Post
            post.published && (!onlyShowcased || (onlyShowcased && post.project_showcase)) && posts.push(post)
        }
    }

    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return posts
}

export async function GET({ request, params, url }) {
    let onlyShowcased = url.searchParams.get("only_showcase") === 'true'
    const posts = await getPosts(onlyShowcased)
    return json(posts)
}
