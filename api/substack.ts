import type { VercelRequest, VercelResponse } from '@vercel/node'
import { XMLParser } from 'fast-xml-parser'

// Change this if the publication ever moves to a different subdomain/custom domain.
const FEED_URL = 'https://isabelpradotucker.substack.com/feed'

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600')

  try {
    const feedRes = await fetch(FEED_URL, {
      headers: { 'User-Agent': 'portfolio-site-substack-fetch' },
    })

    if (!feedRes.ok) {
      res.status(200).json({ posts: [], available: false })
      return
    }

    const xml = await feedRes.text()
    const parser = new XMLParser({ ignoreAttributes: false })
    const parsed = parser.parse(xml)

    const items = parsed?.rss?.channel?.item
    const list = Array.isArray(items) ? items : items ? [items] : []

    const posts = list.slice(0, 6).map((item: any) => ({
      title: item.title ?? 'Untitled',
      link: item.link ?? FEED_URL.replace('/feed', ''),
      pubDate: item.pubDate ?? '',
      contentSnippet: stripHtml(String(item.description ?? '')).slice(0, 220),
    }))

    res.status(200).json({ posts, available: posts.length > 0 })
  } catch {
    res.status(200).json({ posts: [], available: false })
  }
}
