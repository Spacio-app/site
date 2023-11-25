'use client'
import CreatePost from '@/components/feed/CreatePost'
import LoadMore from '@/components/feed/LoadMore'
import PostFeed from '@/components/feed/PostFeed'
import { auth } from 'auth'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import useSWR, { SWRConfig, mutate, preload, useSWRConfig } from 'swr'
import { set } from 'zod'
import fetcher from '@/helper/axiosFetcher'

const Feed = () => {
  // const { mutate } = useSWRConfig()
  // const [feed, setFeed] = useState(useSWR('http://127.0.0.1:3001/contentFeed?page=1').data)
  const session = useSession()
  // const feed = useSWR(`${apiBaseUrl}contentFeed?page=${1}`).data
  const { data: feed, error } = useSWR(`contentFeed?page=${1}`, fetcher, { refreshInterval: 3000 })
  // useEffect(() => {
  //   void preload(`${apiBaseUrl}contentFeed?page=${1}`, fetcher).then((data) => {
  //     console.log('Preloaded', data)
  //     setFeed(data)
  //   })
  // }, [feed])

  useEffect(() => {
    // revalidate data every new post
    void mutate(`contentFeed?page=${1}`)
  }
  , [feed, mutate])

  return (
    <section className="flex lg:mx-[30%] mx-[10%]">
      <div className="grid gap-9 my-6 h-fit w-full">
        <SWRConfig
          value={{
            refreshInterval: 1000,
            fetcher: async (resource, init) => fetch(resource, init).then(async res => res.json())
          }}
        >
          <CreatePost />
          {
            feed
              ? feed.map((data: any, index: any) => (
                <PostFeed key={index} session={session} {...data}/>
              ))
              : null
          }
          {
            feed ? <LoadMore /> : null
          }
        </SWRConfig>
      </div>
    </section>
  )
}
export default Feed
