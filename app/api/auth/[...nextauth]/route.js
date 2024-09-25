import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connectDB from "@/config/db";

export const authOptions =  {
    session: {
      strategy: "jwt",
    },
    providers: [
    CredentialsProvider({
        id: 'credientals',
        name: 'Credientals',
        credentials: {
            email: {
                label: 'Email',
                type: 'text'
            },
            password: {
                label: 'Password',
                type: 'password'
            },
        },

        async authorize(credentials) {
            await connectDB()
            try {
                const { email, password } = credentials;

                const user = await User.findOne({ email });
                // console.log('--------',email, password,'---------')

                if (user) {
                    const isPasswordCorrect = await bcrypt.compare(password, user.password)
                    if (isPasswordCorrect){
                        return user;
                    }
                }

            } catch (error) {
                throw new Error("Invalid Email or Password");
                
            }
        }
    })],
    
    callbacks: {
        signIn: async ({user, account}) => {
            if (account?.provider == "credientals"){
                return true;
            }
        },
        jwt: async ({ token, user }) => {
          user && (token.user = user);
  
          return token;
        },
        session: async ({ session, token }) => {
          session.user = token.user;
  
          // delete password from session
          delete session?.user?.password;
  
          return session;

        },
    },
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };