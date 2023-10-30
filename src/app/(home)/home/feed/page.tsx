import CreatePost from '@/components/feed/CreatePost'
import PostFeed from '@/components/feed/PostFeed'

export default function Page () {
  // Datos dinámicos del backend (ejemplo simplificado)
  const postData = [
    {
      userName: 'José Luis Sandoval',
      titlePost: 'Curso de NextJS',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius iste cum temporibus assumenda soluta cumque, architecto quos atque explicabo officia velit eos vel libero nam corporis, nobis sint dolor possimus.',
      comments: [
        {
          authorName: 'Diego Peña',
          authorAvatar: 'https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg',
          commentText: 'Comentario de ejemplo 1'
        },
        {
          authorName: 'Otro Autor',
          authorAvatar: 'https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg',
          commentText: 'Comentario de ejemplo 2'
        }
      ],
      imageSrc: 'https://nextjs.org/static/blog/next-13/twitter-card.png',
      postType: 'course'
    },
    {
      userName: 'Diego Peña',
      titlePost: 'Curso de JavaScript',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius iste cum temporibus assumenda soluta cumque, architecto quos atque explicabo officia velit eos vel libero nam corporis, nobis sint dolor possimus.',
      comments: [
        {
          authorName: 'José Luis Sandoval',
          authorAvatar: 'https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg',
          commentText: 'Comentario de ejemplo 1'
        },
        {
          authorName: 'Otro Autor',
          authorAvatar: 'https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg',
          commentText: 'Comentario de ejemplo 2'
        },
        {
          authorName: 'Otro Autor',
          authorAvatar: 'https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg',
          commentText: 'Comentario de ejemplo 3'
        },
        {
          authorName: 'Otro Autor',
          authorAvatar: 'https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg',
          commentText: 'Comentario de ejemplo 4'
        },
        {
          authorName: 'Otro Autor',
          authorAvatar: 'https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg',
          commentText: 'Comentario de ejemplo 5'
        },
        {
          authorName: 'Otro Autor',
          authorAvatar: 'https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg',
          commentText: 'Comentario de ejemplo 6'
        }
      ],
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
      postType: 'course'
    },
    {
      userName: 'José Luis Sandoval',
      titlePost: 'Post normal(no curso)',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius iste cum temporibus assumenda soluta cumque, architecto quos atque explicabo officia velit eos vel libero nam corporis, nobis sint dolor possimus.',
      comments: [
        {
          authorName: 'Diego Peña',
          authorAvatar: 'https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg',
          commentText: 'Comentario de ejemplo 1'
        },
        {
          authorName: 'José Luis Sandoval',
          authorAvatar: 'https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg',
          commentText: 'Comentario de ejemplo 2'
        }
      ],
      postType: 'Post normal'
    },
    {
      userName: 'Diego Peña',
      titlePost: 'Post normal(no curso) con Imagen',
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius iste cum temporibus assumenda soluta cumque, architecto quos atque explicabo officia velit eos vel libero nam corporis, nobis sint dolor possimus.',
      comments: [
        {
          authorName: 'Diego Peña',
          authorAvatar: 'https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg',
          commentText: 'Comentario de ejemplo 1'
        },
        {
          authorName: 'José Luis Sandoval',
          authorAvatar: 'https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg',
          commentText: 'Comentario de ejemplo 2'
        }
      ],
      imageSrc: 'https://tutsforweb.com/wp-content/uploads/2018/03/carbon.png',
      postType: 'Post normal'
    }
  ]

  return (
    <section className="flex lg:mx-[30%] mx-[10%]">
      <div className="grid gap-9 my-6 h-fit w-full">
        <CreatePost />
        {postData.map((data, index) => (
          <PostFeed key={index} {...data} />
        ))}
      </div>
    </section>
  )
}