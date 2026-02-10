import getAllPosts from "@/lib/getAllPosts"
import Link from "next/link";
import { Headland_One } from 'next/font/google'
import { redirect } from "next/navigation";

const headland = Headland_One({ weight: ['400'], subsets: ['latin'] });

export const metadata = {
  title: {
    absolute: 'Posts'
  },
  description: "Posts page of Next Dev",
  
}


async function PostPage() {

  const posts = await getAllPosts()
  // console.log(posts)

  // if (posts) {
  //   redirect(`/posts/${posts[0].id}`);
  // }
  

  return (
    <div className={`pt-20 ${headland.className}`}>
      <h1 className='text-2xl text-center border-b w-36 mx-auto rounded-xl'>
        All Posts
      </h1>
      <ul className='mt-6 px-6'>
        {posts.map((post, idx) => (
          <li key={post.id} className='mb-2 cursor-pointer pb-1'>
            <Link href={`/posts/${post.id}`}>
              <span className='border-b px-1 rounded-xl mr-1 border-yellow-600'>
                {idx + 1}.
              </span>{' '}
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostPage