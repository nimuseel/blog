import { PostCard } from 'nextra-theme-blog'
import { getPosts, getTags } from '../../posts/get-posts'

interface Params {
  tag: string
}

async function generateMetadata(props: Params) {
  return {
    title: `${decodeURIComponent(props.tag)}`
  }
}

export default async function TagPage(props) {
  const params: { tag: string } = await props.params
  const { title } = await generateMetadata(params)
  console.log("🚀 ~ TagPage ~ title:", title)
  const posts = await getPosts()
  return (
    <>
      <h1>{title}</h1>
      {posts
        .filter(post =>
          post.frontMatter.tag.includes(decodeURIComponent(params.tag))
        )
        .map(post => (
          <PostCard key={post.route} post={post} />
        ))}
    </>
  )
}