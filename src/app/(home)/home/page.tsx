'use client'
import CreatePost from '@/components/feed/CreatePost'
import LoadMore from '@/components/feed/LoadMore'
import PostFeed from '@/components/feed/PostFeed'
import { auth } from 'auth'
import Axios from 'axios'
import useSWR, { SWRConfig, preload, unstable_serialize } from 'swr'

export const revalidate = 1000
export const fetchCache = 'force-no-store'

const GetFeed = () => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const { data } = unstable_serialize(`${apiBaseUrl}contentFeed?page=${1}`) as any
  console.log(data)
  return data
}

const Feed = () => {
  // const session = await auth()
  // const feed = await GetFeed()
  const feed = GetFeed()

  console.log('DATAAA', feed)

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
          {/* {
            feed
              ? feed.map((data: any, index: any) => (
                <PostFeed key={index} session={session} {...data}/>
              ))
              : null
          } */}
          <LoadMore />
        </SWRConfig>
      </div>
    </section>
  )
}
export default Feed
