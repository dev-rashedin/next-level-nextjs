import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link"
import styles from './styles.module.css'

async function categoriesPage() {

  const posts = await getAllPosts();

  return (
    <div className={styles.mainStyle}>
      <h1 className="text-xl">All Categories</h1>
      <h4>Hello there, it&apos;s global css  style</h4>
       {/* <ul className='mt-6 px-6'>
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
      </ul> */}
    </div>
  )
}
export default categoriesPage