import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react';

function App() {
  const [path, setChemin] = useState('')
  const testerDossier = async () => {
    const response = await fetch("http://127.0.0.1:8000/analyser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chemin: path
      })
    });

    const data = await response.json();

    console.log(data);
  };
  return (
    <>
      <Header></Header>
      <div className='flex'>
        <div className='flex flex-col justify-center items-center bg-emerald-200 h-screen space-y-6 w-full'>
          <img src="src\assets\birdnet-logo-circle.png" alt=""  className='w-64'/>
          <h1 className='font-bold text-7xl'>Birdnet</h1>
          <input type="text" className='border-2 pt-1 pl-2 pr-10 rounded-2xl' value={path}
            onChange={(e) => setChemin(e.target.value)} />
          <button onClick={testerDossier} className='border-2 p-3 rounded-2xl hover:backdrop-brightness-150 cursor-pointer active:backdrop-brightness-125'>
            Tester le dossier
          </button>
        </div>
        <div className='w-full bg-emerald-400 flex justify-center items-center text-4xl'> 
          <div className='w-2/3 h-7/8 border-5 rounded-3xl'>
          <div className='p-4 flex justify-center border-b-4'>
            <p className='font-bold'>Résultats d'analyse</p>
          </div>
          <div className='p-3'>
            
          </div>
            
          </div>
        </div>

      </div>

      <Footer></Footer>
    </>
  )
}

export default App