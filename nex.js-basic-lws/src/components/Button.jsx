'use client'

function Button() {
  return (
    <div className='mt-6 text-center'>
      <button
        onClick={() => console.log('Clicked')}
        className='px-4 py-1 rounded-md border-2  border-green-600'
      >
        Click Me
      </button>
    </div>
  );
}
export default Button