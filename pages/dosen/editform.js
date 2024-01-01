import useSWR from 'swr';
import EditFormDsn from '@/components/dosen/EditFormDsn';
import Link from 'next/link';
import AuthRoute from '@/components/AuthRoute';

export default function editform({user}) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR('/api/dosen/query', fetcher);

  if (!data && !error) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    // <AuthRoute>
    <div className="read">
      <div>
      <Link href="/mahasiswa/protected">Home</Link>
      </div>
      <div>
      {data.map((item) => (
        <div key={item.dsn_id} className="mhs">
          <EditFormDsn data={item} />
        </div>
      ))}
      </div>
    </div>
    // </AuthRoute>
  );
}
