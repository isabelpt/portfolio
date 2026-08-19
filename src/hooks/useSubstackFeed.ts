import { useEffect, useState } from 'react'
import type { SubstackPost } from '../types'

interface FeedState {
  posts: SubstackPost[]
  loading: boolean
  available: boolean
}

export function useSubstackFeed() {
  const [state, setState] = useState<FeedState>({ posts: [], loading: true, available: false })

  useEffect(() => {
    let cancelled = false

    fetch('/api/substack')
      .then((res) => res.json())
      .then((data: { posts: SubstackPost[]; available: boolean }) => {
        if (!cancelled) setState({ posts: data.posts ?? [], loading: false, available: data.available })
      })
      .catch(() => {
        if (!cancelled) setState({ posts: [], loading: false, available: false })
      })

    return () => {
      cancelled = true
    }
  }, [])

  return state
}
