import Card from './Card';
import { useEffect, useState } from 'react';

const Container = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function fetchDocs() {
      await fetch('https://6564c6a6ceac41c0761ecb3b.mockapi.io/Docs')
        .then((res) => res.json())
        .then((data) => setDocs(data))
        .catch((err) => {
          console.log(err);
        });
    }
    fetchDocs();
  }, []);
  return (
    <div className='fixed h-full z-[3] flex flex-shrink-0 w-full mx-4 gap-4 overflow-scroll no-scrollbar flex-wrap mb-4 max-sm:justify-center max-sm:mx-0'>
      {docs.map((doc) => (
        <Card
          key={doc.id}
          doc={doc}
        />
      ))}
    </div>
  );
};

export default Container;
