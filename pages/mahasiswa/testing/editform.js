import useSWR from 'swr';
import EditForm from '@/components/testing/EditForm';
import Link from 'next/link';
import AuthRoute from '@/components/AuthRoute';

export default function editform({user}) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('/api/mahasiswa/query', fetcher);

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
      <div>
      {data.map((item) => (
        <div key={item.mhs_nim} className="mhs">
          <EditForm data={item} />
        </div>
      ))}
      </div>
    </div>
    </AuthRoute>
  );
}
