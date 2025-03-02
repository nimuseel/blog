import { getPosts } from '@/app/posts/get-posts'

const CONFIG = {
  title: 'nimuseel',
  siteUrl: 'https://nimuseel.dev',
  description: 'Latest blog posts',
  lang: 'en-us'
}

export async function GET() {
  const allPosts = await getPosts()
  console.log("🚀 ~ GET ~ allPosts:", allPosts)
  const posts = allPosts
    .map(
      post => `    <item>
        <title>${post.name}</title>
        <description>${post.name}</description>
        <link>${CONFIG.siteUrl}${post.route}</link>
        <pubDate>${new Date(post.frontMatter.date).toUTCString()}</pubDate>
    </item>`
    )
    .join('\n')
  const xml = `<?xml version="1.0" encoding="UTF-8" contentType="text/xml" ?>
<rss version="2.0">
  <channel>
    <title>${CONFIG.title}</title>
    <link>${CONFIG.siteUrl}</link>
    <description>${CONFIG.description}</description>
    <language>${CONFIG.lang}</language>
${posts}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml'
    }
  })
}