import Button from "@/components/Button"
import Image from "next/image";
import profileImg from '@/public/profileImage.jpg'

export default function MissionPage() {
  return (
    <main>
      <div className='text-center pt-20'>This is mission page</div>

      <div className='my-4'>
        <Image
          className='w-40 h-40 rounded-full mx-auto border-4 border-yellow-600 p-1 outline outline-4 outline-green-600'
          src={profileImg}
          alt='Profile Image'
          quality={100}
         placeholder="blur"
        />
      </div>

      <Button />
    </main>
  );
}