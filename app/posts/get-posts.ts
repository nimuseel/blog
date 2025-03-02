import { normalizePages } from 'nextra/normalize-pages'
import { getPageMap } from 'nextra/page-map'

export async function getPosts() {
  const { directories } = normalizePages({
    list: await getPageMap('/posts'),
    route: '/posts'
  })
  return directories
    .filter(post => post.name !== 'index')
    .sort((a, b) => new Date(b.frontMatter.date as string).getTime() - new Date(a.frontMatter.date as string).getTime())
}

export async function getTags() {
  const posts = await getPosts()
  const tags = posts.flatMap(post => post.frontMatter.tag)
  return tags as string[]
}