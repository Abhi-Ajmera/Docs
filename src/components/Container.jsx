import Card from './Card';
import { useEffect, useState } from 'react';
import { db } from './../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Container = () => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const querySnapshot = await getDocs(collection(db, '/Docs'));
    querySnapshot.map((doc) => {
      setData({ id: doc.id, ...doc.data() });
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className='fixed h-full z-[3] flex flex-shrink-0 w-full mx-4 gap-4 overflow-scroll no-scrollbar flex-wrap mb-4 max-sm:justify-center max-sm:mx-0'>
      {/* {data.map((doc) => (
        <Card
          key={data.id}
          doc={doc}
        />
      ))} */}
    </div>
  );
};

export default Container;
