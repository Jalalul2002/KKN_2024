// pages/login.js
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Attempt to sign in using the Credentials provider
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false, // Prevent automatic redirection
    });

    if (!result.error) {
      // Successful login
      window.location.href = "/mahasiswa/protected"; // Redirect to the protected page
    } else {
      // Handle login error
      console.error("Login error:", result.error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Username (NIM):
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
}
