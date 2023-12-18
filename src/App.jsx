import { useState } from 'react';
import Background from './components/Background';
import Container from './components/Container';
import Navbar from './components/Navbar';

import Model from './components/Model';
import Add from './components/Add';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className='relative w-full h-screen bg-slate-800'>
      <Background />
      <Navbar />
      <Container />
      <Model
        open={open}
        setOpen={setOpen}
      />
      <Add
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
}

export default App;
