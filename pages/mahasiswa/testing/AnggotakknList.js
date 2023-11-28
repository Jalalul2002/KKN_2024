// components/AnggotakknList.js
import { useEffect, useState } from 'react';

const AnggotakknList = () => {
  const [anggotakknData, setAnggotakknData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getAnggotakkn');
        const data = await response.json();
        setAnggotakknData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Anggotakkn List</h1>
      <ul>
        {anggotakknData.map((item) => (
          <li key={item.id_anggotakkn}>
            {item.mahasiswa_nim} - {item.mahasiswa_nama} - {item.jeniskkn}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnggotakknList;
