import Comments from "@/components/Comments";
import getAllPosts from "@/lib/getAllPosts";
import getPostComment from "@/lib/getPostComment";
import getSinglePost from "@/lib/getSinglePost";
import { Suspense } from "react";

// generate metadata
export async function generateMetadata({params}) {
   const { id } = await params;
  const post = await getSinglePost(id);
   
  return {
    title: post.title,
    description: post.body,
    keywords: post.body.split(" ")
 }
}

async function SinglePostPage({ params }) {
  const { id } = await params;
  const postPromise = getSinglePost(id);
  const commentsPromise = getPostComment(id)
  // console.log(comments)

  // const [post, comments] = await Promise.all([postPromise, commentsPromise])

  const post = await postPromise;
  

  return (
    <div className='pb-8 space-y-4 pt-20'>
      <div className=' border border-dotted p-4 lg:p-8 rounded-lg border-yellow-200 space-y-2 lg:w-1/2 mx-auto'>
        <h2 className='text-green-500 text-lg border-b hover:border-b-2 pb-2 border-yellow-200 border-opacity-45 hover:transition-all hover:duration-300'>
          {post.title}
        </h2>

        <p> {post.body} </p>
      </div>

      <Suspense fallback={<h1 className='mt-10'>Loading Comments....</h1>}>
        <Comments commentsPromise={commentsPromise} />
      </Suspense>
    </div>
  );
}
export default SinglePostPage

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}