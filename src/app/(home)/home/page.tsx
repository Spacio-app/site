import CreatePost from '@/components/feed/CreatePost'
import LoadMore from '@/components/feed/LoadMore'
import PostFeed from '@/components/feed/PostFeed'
import Sidebar from '@/components/feed/Sidebar'
import { auth } from 'auth'
import Axios from 'axios'
import Header from '../header'
import Sidebar2 from '@/components/feed/Sidebar2'
import { useSession } from 'next-auth/react'
// import useSWR, { SWRConfig, mutate, preload, useSWRConfig } from 'swr'
import { set } from 'zod'
import GetFeed from '@/components/GetFeed'
// import fetcher from '@/helper/axiosFetcher'

const Feed = () => {
  return (
    <section className="flex lg:gap-2 md:mx-[10%] lg:mx-[0%]">
       <div className='hidden lg:block lg:w-[25%] xl:w-[20%] border-r border-gray-300'>
        <Sidebar/>
      </div>
      <div className="grid gap-9 h-fit lg:w-[50%] xl:w-[60%] border-gray-300 mx-auto">
        <GetFeed />
      </div>
      <div className='hidden lg:block lg:w-[25%] xl:w-[20%] border-l border-gray-300'>
        <Sidebar2/>
      </div>
    </section>
  )
}
export default Feed
