  import NextAuth from "next-auth";
  import CredentialsProvider from "next-auth/providers/credentials";
  import db from "../../lib/db";

  export default NextAuth({
      secret: process.env.JWT_SECRET,
      providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "NIM", type: "text" },
          password: { label: "Password", type: "password" },
        },
        authorize: async (credentials) => {
          const { username, password } = credentials;

          try {
            const [rows] = await db.promise().query(
              'SELECT * FROM akun WHERE akun_nim = ? AND akun_pw = ?',
              [username, password]
            );

            if (rows && rows.length === 1) {
              // Authentication successful
              const user = { id: rows[0].akun_id, name: rows[0].akun_nim };

              return Promise.resolve(user);
            }
          } catch (error) {
            return Promise.resolve(null);
          }
        },
      }),
    ],
    session: {
      jwt: true,
    }
  //   callbacks: {
  //     async signIn({ credentials }) {
  //       const isAllowedToSignIn = true
  //       if (isAllowedToSignIn) {
  //         return true
  //       } else {
  //         // Return false to display a default error message
  //         return false
  //         // Or you can return a URL to redirect to:
  //         // return '/unauthorized'
  //       }
  //     },
  //     async redirect({ url, baseUrl }) {
  //       return baseUrl
  //     },
  //     async session({ session, user, token }) {
  //       return session
  //     },
  //     async jwt({ credentials, account, profile }) {
  //         if (user) {
  //           token.id = user.id;
  //           token.name = user.name;
  //         }
  //         return token;
  //     }
  //   //   async jwt({ token, user, account, profile, isNewUser }) {
  //   //     return token
  //   // }
  // }
    // callbacks: {
    //   async jwt(token, user) {
    //     if (user) {
    //       token.id = user.id;
    //       token.name = user.name;
    //     }
    //     return token;
    //   },
  //     // async session(session, token) {
  //     //   session.user = { id: token.id, name: token.name };
  //     //   return session;
  //     // },
  //   // },
  });
