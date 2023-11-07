import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Protected() {
  const { data: session, loading } = useSession();

  const handleLogout = async () => {
    await signOut(); // Sign the user out
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (session) {
    // User is authenticated
    return (
    <div>
      Welcome, {session.user.name}! <br/>
      <button onClick={handleLogout}>Logout</button> <br/>
      <Link href="/mahasiswa/display">Display</Link>
    </div>
    );
  }

  // User is not authenticated
  return (
    <div>
      Please sign in to access this content.<br/>
      <Link href="/login">Login</Link>
    </div>
    );
}
