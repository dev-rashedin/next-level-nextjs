
export default async function getSinglePost(id) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await result.json()
  return data
  // return result.json()
}