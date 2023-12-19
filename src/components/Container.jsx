import Card from './Card';
import { useEffect, useState } from 'react';
import { db } from './../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Container = () => {
  const [docs, setDocs] = useState([]);
  async function fetchData() {
    const querySnapshot = await getDocs(collection(db, '/Docs'));
    let newData = [];
    querySnapshot.forEach((doc) => {
      newData.push({ id: doc.id, ...doc.data() });
    });
    setDocs(newData);
  }

  useEffect(() => {
    fetchData();
  }, [docs]);

  return (
    <div className='fixed z-[3] flex flex-shrink-0 w-full mx-4 gap-4 overflow-scroll no-scrollbar flex-wrap mb-4 max-sm:justify-center max-sm:mx-0'>
      {docs.map((doc) => (
        <Card
          key={doc.id}
          data={doc}
        />
      ))}
    </div>
  );
};

export default Container;
