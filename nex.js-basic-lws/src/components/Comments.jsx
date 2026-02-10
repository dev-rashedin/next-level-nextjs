

async function Comments({ commentsPromise }) {
  const comments = await commentsPromise;
  return (
    <div className='pt-10'>
      <h1 className='text-start text-lg border-b w-28 mb-4 rounded-br-lg border-l pl-1  rounded-bl-lg border-green-600'>
        Comments
      </h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className='mb-2 border-b border-opacity-25'>
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Comments 