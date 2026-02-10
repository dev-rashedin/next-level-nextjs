export default async function getPostComment(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/comments?${id}&&_limit=5`
  );

  if (!result.ok) {
    throw new Error('There was an error fetching posts');
  }

  return result.json();
}
