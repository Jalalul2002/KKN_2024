import useSWR from 'swr';
import AddForm from '@/components/dosen/AddForm';
import Link from 'next/link';
import AuthRoute from '@/components/AuthRoute';

export default function AddData({ user }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('/api/dosen/query', fetcher);

  if (!data && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <AuthRoute>
      <div className="read">
        <div>
          <Link href="/mahasiswa/protected">Home</Link>
        </div>
        <AddForm />
      </div>
    </AuthRoute>
  );
}
