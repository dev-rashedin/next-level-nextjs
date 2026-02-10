import Link from "next/link";

export const metadata = {
  title: 'About Us',
  description: 'This About page of this website',
};


export default function AboutLayout({children}) {
  return (
    <div>
      <nav className='flex items-center justify-center py-4 gap-4 border border-opacity-45 border-yellow-600'>
        <Link href='/about/mission'>
        Mission
        </Link> |
        <Link href='/about/vision'>
        Vision
        </Link>
      </nav>
    <div>{children}</div>
    </div>
  )
}