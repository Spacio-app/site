'use client'
import CreatePost from '@/components/feed/CreatePost'
import LoadMore from '@/components/feed/LoadMore'
import PostFeed from '@/components/feed/PostFeed'
import Sidebar from '@/components/feed/Sidebar'
import { auth } from 'auth'
import Axios from 'axios'
import Header from '../header'
import Sidebar2 from '@/components/feed/Sidebar2'
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
      <div className='hidden lg:block lg:w-[25%] xl:w-[20%] border-l border-gray-300'>
        <Sidebar2/>
      </div>
    </section>
  )
}
export default Feed
