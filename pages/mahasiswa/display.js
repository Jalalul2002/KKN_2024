import AuthRoute from "@/components/AuthRoute";
import { Data } from "@/components/mahasiswa/Data";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Display() {
  const { data: session } = useSession();

  if (!session) {
    // If the user is not authenticated, redirect to the login page
    return (
      <div>
        Redirecting to login...
      </div>
    );
  }

  return (
    <div>
      <AuthRoute>
        <Data /> <br />
        <Link href="/mahasiswa/protected">Protected</Link>
      </AuthRoute>
    </div>
  );
}
