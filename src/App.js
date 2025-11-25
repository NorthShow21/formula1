
import './App.css';
import Header from './Components/Header';
import Highlight1 from './Components/Highlight1';

function App() {
  return (
    <>
    
      <header className='header'>
        <Header />
      </header>
      
      {/* Buat Highlight */}
      <section className='highlight'>
        <h1>HIGHLIGHTS</h1>
        <Highlight1 />
      </section>
    


    </>
  );
}

export default App;
