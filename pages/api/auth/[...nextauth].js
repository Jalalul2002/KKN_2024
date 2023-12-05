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
    session:{
      jwt: true,
    },
  });
