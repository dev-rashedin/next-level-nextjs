import { getServerSession } from 'next-auth';
import Image from 'next/image'
import { authOptions } from '../api/auth/[...nextauth]/route';


export default async function AboutPage() {

  const session = await getServerSession(authOptions)

  console.log("session in about page : ", session)
  

  return (
    <div className='text-center pt-20 flex flex-col items-center justify-center gap-8'>
      <h4> This is About page</h4>
      <Image
        src='https://i.ibb.co.com/Jr1tTHg/Next-js-Basic.jpg'
        width={500}
        height={300}
        alt='Next.js Image'
        className='rounded-lg'
      />
    </div>
  );
}
