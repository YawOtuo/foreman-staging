import { auth } from "@/app/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
            },
            async authorize(credentials): Promise<any> {
                try {
                    const userCred = await signInWithEmailAndPassword(auth, (credentials as any).email || "", (credentials as any).password || "");
                    if (userCred.user) {
                        return userCred.user;
                    }
                    return null;
                } catch (err: any) {
                    console.error("SignIn error:", err);
                    // Handle specific error codes here, e.g., auth/user-not-found, auth/wrong-password
                    if (err.code === 'auth/invalid-email') {
                        // Handle invalid email
                        console.error("Invalid email");
                    } else if (err.code === 'auth/wrong-password') {
                        // Handle wrong password
                        console.error("Wrong password");
                    }
                    // Re-throw or handle the error appropriately
                    throw err;
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ]
} as NextAuthOptions)

export { handler as GET, handler as POST };