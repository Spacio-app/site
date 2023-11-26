'use client'
import CreatePost from '@/components/feed/CreatePost'
import LoadMore from '@/components/feed/LoadMore'
import PostFeed from '@/components/feed/PostFeed'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import fetcher from '@/helper/axiosFetcher'

const GetFeed = () => {
  const session = useSession()
  const { data: feed, error } = useSWR('contentFeed?page=1', fetcher, { refreshInterval: 1000 })
  return (
  <>
    <CreatePost />
    {
      feed
        ? feed.map((data: any, index: any) => (
          <PostFeed key={index} session={session} {...data}/>
        ))
        : null
    }
    {
      // Help me to send last feed to LoadMore component to add it to the top of the feed after loading more content from the server (see LoadMore.tsx)
      feed ? <LoadMore session={session} /> : null
    }
  </>
  )
}

export default GetFeed
