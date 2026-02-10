import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';



export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email here',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!credentials) {
          return null;
        }
        if (email) {
          const currentUser = users.find((user) => user.email === email);
          if (currentUser.password === password) {
            console.log(currentUser);

            return { ...currentUser };
          }
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.type = user.type;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user.type = token.type;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

const users = [
  {
    id: 1,
    name: 'Mehedi',
    email: 'm@gmail.com',
    password: 'm123',
    type: 'admin',
  },
  {
    id: 2,
    name: 'Arefin',
    email: 'a@gmail.com',
    password: 'password',
    type: 'admin',
  },
  {
    id: 3,
    name: 'Shashwoto',
    email: 's@gmail.com',
    password: 'password',
    type: 'admin',
  },
];


export { handler as GET, handler as POST }
