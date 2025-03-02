import { getPosts, getTags } from "@/app/posts/get-posts";
import { Metadata } from "next";
import Link from "next/link";
import { PostCard } from "nextra-theme-blog";

export const metadata: Metadata = {
  title: "Posts",
}

export default async function PostsPage() {
  const tags = await getTags()
  const posts = await getPosts()
  const allTags = tags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return (
    <div data-pagefind-ignore="all">
      <h1>{metadata.title as string}</h1>
      <div
        className="not-prose"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}
      >
        {Object.entries(allTags).map(([tag, count]) => (
          <Link key={tag} href={`/tags/${tag}`} className="nextra-tag">
            {tag} ({count})
          </Link>
        ))}
      </div>
      {posts.map(post => (
        <PostCard key={post.route} post={post} />
      ))}
    </div>
  )
}