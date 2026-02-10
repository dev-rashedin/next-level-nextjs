"use client"
import NavLinks from '@/components/NavLinks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const pathName = usePathname()
  return (
    <div>
      <ul className='flex flex-col text-green-600 items-center mt-12 font-semibold  gap-6'>
        {NavLinks?.map(link=> (
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
    </div>
  );
}
export default Sidebar;
