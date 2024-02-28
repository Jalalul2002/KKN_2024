import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // console.log("credentials", credentials);
        const authResponse = await fetch("", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();

        // Return an object with the username property
        return { ...user, username: credentials.username };
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      // Set user properties in the session
      session.user.id = token.id;
      session.user.username = token.username;

      return session;
    },
    jwt({ token, account, user }) {
      // Set token properties
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
        token.username = user.username;
      }

      return token;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
});
