import Background from './components/Background';
import Container from './components/Container';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='relative w-full h-screen bg-slate-800'>
      <Background />
      <Navbar />
      <Container />
    </div>
  );
}

export default App;
