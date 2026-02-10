"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NavLinks from "./NavLinks";
import { signOut, useSession } from "next-auth/react";

function Navbar() {

  const pathName = usePathname();
  // console.log(pathName)
  const router = useRouter()
  const session = useSession();

  console.log('session in navbar', session)
  

  const handler = () => {
router.push('/api/auth/signin')
  }

  if(pathName === '/dashboard'){
    return
  }
  
  return (
    <nav
      className={`py-4 bg-blue-950 bg-opacity-45 text-green-600 font-semibold flex gap-6 justify-between items-center px-4 h-16 font-mono`}
    >
      {/* logo */}
      <h4 className='text-xl italic'>
        Next <span className='text-yellow-600 not-italic'>Hero</span>
      </h4>
      {/* menu */}
      <ul className='flex gap-4'>
        {NavLinks?.map((link, idx) => (
          <li key={link.title}>
            <Link
              className={`${
                pathName === link.path &&
                'text-yellow-600 border-b px-1 border-yellow-600'
              }`}
              href={link.path}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* login */}
      {session.status === 'unauthenticated' ? (
        <button className='border px-4 py-1 rounded-lg border-green-600 text-yellow-600'>
          <Link href='/api/auth/signin'>Login</Link>
        </button>
      ) : (
        <button onClick={() => signOut()} className='border px-4 py-1 rounded-lg border-yellow-600 text-green-600'>
          Logout
        </button>
      )}

      <div>
        <p>{session.data?.user?.name}</p>
        {session.data?.user?.type}
      </div>
    </nav>
  );
}
export default Navbar