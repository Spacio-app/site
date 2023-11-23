import CreatePost from '@/components/feed/CreatePost'
import LoadMore from '@/components/feed/LoadMore'
import PostFeed from '@/components/feed/PostFeed'
import Sidebar from '@/components/feed/Sidebar'
import { auth } from 'auth'
import Axios from 'axios'
import Header from '../header'
import Sidebar2 from '@/components/feed/Sidebar2'

const getFeed = async () => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const response = await fetch(`${apiBaseUrl}contentFeed?page=${1}`)
  console.log(response)
  const feed = await response.json()

  return feed
}

const Feed = async ({ params }: { params: any }) => {
  const session = await auth()
  const feed = await getFeed()

  console.log(feed)

  return (
    <section className="flex lg:gap-2 md:mx-[10%] lg:mx-[0%]">
      <div className='hidden lg:block lg:w-[25%] xl:w-[20%] border-r border-gray-300'>
        <Sidebar/>
      </div>
      <div className="grid gap-9 h-fit lg:w-[50%] xl:w-[60%] border-gray-300 mx-auto">
        <CreatePost />
        {
          feed
            ? feed.map((data: any, index: any) => (
              <PostFeed key={index} session={session} {...data}/>
            ))
            : null
        }
        <LoadMore />
      </div>
      <div className='hidden lg:block lg:w-[25%] xl:w-[20%] border-l border-gray-300'>
        <Sidebar2/>
      </div>
    </section>
  )
}
export default Feed
