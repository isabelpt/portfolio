import { profile } from '../content/profile'
import { useSubstackFeed } from '../hooks/useSubstackFeed'

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function Writing() {
  const { posts, loading, available } = useSubstackFeed()

  return (
    <section id="writing" className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-serif text-3xl font-semibold text-[var(--color-navy-deep)]">Substack</h2>
        <a
          href={profile.links.substack}
          target="_blank"
          rel="noreferrer"
          className="font-sans text-sm font-medium text-[var(--color-navy)] underline decoration-[var(--color-lilac)] decoration-2 underline-offset-4 hover:text-[var(--color-navy-deep)]"
        >
          View on Substack ↗
        </a>
      </div>

      {loading && (
        <p className="mt-6 font-sans text-sm text-[var(--color-ink)]/60">Loading latest posts…</p>
      )}

      {!loading && available && posts.length > 0 && (
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col rounded-2xl border border-[var(--color-line)] bg-white/60 p-6 transition-shadow hover:shadow-md hover:shadow-[var(--color-lilac-soft)]"
            >
              {post.pubDate && (
                <p className="font-sans text-xs uppercase tracking-wide text-[var(--color-lilac)]">
                  {formatDate(post.pubDate)}
                </p>
              )}
              <h3 className="mt-2 font-serif text-lg font-semibold text-[var(--color-navy-deep)]">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-[var(--color-ink)]/75">
                {post.contentSnippet}
              </p>
            </a>
          ))}
        </div>
      )}

      {!loading && !available && (
        <div className="mt-8 rounded-2xl border border-dashed border-[var(--color-line)] p-8 text-center">
          <p className="font-sans text-sm text-[var(--color-ink)]/70">
            New posts coming soon — subscribe to get them first.
          </p>
          <a
            href={profile.links.substack}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-full bg-[var(--color-navy)] px-5 py-2.5 font-sans text-sm font-medium text-white transition-colors hover:bg-[var(--color-navy-deep)]"
          >
            Subscribe on Substack
          </a>
        </div>
      )}
    </section>
  )
}
