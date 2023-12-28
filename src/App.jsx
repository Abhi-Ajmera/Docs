import { useState, useEffect } from 'react';
import { db } from './firebase/index';
import { collection, getDocs } from 'firebase/firestore';

import Background from './components/Background';
import Container from './components/Container';
import Navbar from './components/Navbar';

import Model from './components/Model';
import Add from './components/Add';

function App() {
  const [open, setOpen] = useState(false);
  const [docs, setDocs] = useState([]);
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, '/Docs'));
    let newData = [];
    querySnapshot.forEach((doc) => {
      newData.push({ id: doc.id, ...doc.data() });
    });
    setDocs(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='relative w-full h-screen bg-slate-800'>
      <Background />
      <Navbar />
      <Container
        docs={docs}
        fetchData={fetchData}
      />
      <Model
        open={open}
        setOpen={setOpen}
        fetchData={fetchData}
      />
      <Add
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}

export default App;
