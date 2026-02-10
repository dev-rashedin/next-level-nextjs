import Link from "next/link"

  const blogs = [
    {
      id: 1,
      title: 'Blog 1',
      description: 'Blog 1 description',
    },
    {
      id: 2,
      title: 'Blog 2',
      description: 'Blog 2 description',
    },
    {
      id: 3,
      title: 'Blog 3',
      description: 'Blog 3 description',
    },
];
  
export const metadata = {
  title: {
    default: 'Next Dev Blogs',
    template: '%s | Next Dev'
  },
  
  description: 'Blog page of Next Dev',
  keywords: ['Next.js', 'React', 'JavaScript'],
};

export default function BlogPage() {

  return (
    <main className='text-center pt-20'>
      <h3>This is Blog page</h3>
      <ul className='mt-8'>
        {blogs.map((blog) => (
          <li key={blog.id} className='mb-2'>
            <Link href={`/blog/${blog.id}`}> {blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
