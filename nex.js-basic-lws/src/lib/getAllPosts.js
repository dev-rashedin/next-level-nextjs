export default async function getAllPosts() {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?_limit=10`,
    {
      next: {
        revalidate: 10,
      },
    }
  );

  if (!result.ok) {
    throw new Error("There was an error fetching posts")
  }

  const data = await result.json()
 
  return data;
}