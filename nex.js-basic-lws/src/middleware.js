import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const user = true;

// export function middleware(request) {
//   if (request.nextUrl.pathname.startsWith('/about')) {
    
//     return NextResponse.rewrite(new URL('/dashboard', request.url));
//   }
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
    
//     return NextResponse.rewrite(new URL('/about', request.url));
//   }
// }

export const middleware = async(request) => {
  const cookieStore = await cookies();
  
  const token = cookieStore.get('token');
  
  // console.log(token?.value)
  

  if (!user || !token) {
     return NextResponse.redirect(new URL('/login', request.url));
 }
}

export const config = {
  matcher:'/dashboard',
};