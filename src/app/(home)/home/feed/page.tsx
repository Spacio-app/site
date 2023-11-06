import CreatePost from '@/components/feed/CreatePost'
import LoadMore from '@/components/feed/LoadMore'
import PostFeed from '@/components/feed/PostFeed'
import { auth } from 'auth'
import Axios from 'axios'

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
    <section className="flex lg:mx-[30%] mx-[10%]">
      <div className="grid gap-9 my-6 h-fit w-full">
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
    </section>
  )
}
export default Feed
