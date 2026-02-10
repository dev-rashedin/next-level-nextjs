export async function PATCH(request, { params }) {
  const resolvedParamsId = await params.id
  // console.log(typeof resolvedParamsId)
  const body = await request.json();
  

  const index = comments.findIndex(
    (c) => c.id === parseInt(resolvedParamsId)
  );

  comments[index] = {
    id: parseInt(resolvedParamsId),
    text: body.text

  }

  console.log(index)
  
  
  return Response.json({
    message: 'commentUpdated',
    comments
  });
}


export async function DELETE(request, { params }) {
  const resolvedParamsId = await params.id;
  // console.log(typeof resolvedParamsId)

 const remainingComments = comments.filter(c => c.id !== parseInt(resolvedParamsId))


  return Response.json({
    message: 'comment deleted',
    remainingComments,
  });
}





const comments = [
  {
    id: 1,
    text: 'Comment 1',
  },
  {
    id: 2,
    text: 'Comment 2',
  },
  {
    id: 3,
    text: 'Comment 3',
  },
];
