import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react'

function Header() {
  const [hamb, sethamb] = useState(false)
  return (
    <>
      <header className="bg-gray-900 text-white p-4 flex flex-col ">
        <div className="flex justify-center items-center">
          <h1 className="text-6xl font-bold mr-5 mt-8">
            Techniques des Milieux Naturels
          </h1>
          <h1 className="text-5xl font-light italic text-emerald-200 mt-10"> analyse</h1>
        </div>
        <div className='w-3xs mb-7 h-10 p-4' >
          <Hamburger className='w-3xs mb-7 h-10 p-4' onToggle={sethamb} />
        </div>

        <div className={`
          transition-all duration-500 pt-5
          ${hamb ? 'max-h-96 opacity-100 ' : 'max-h-0 opacity-0 '}
        `}>
          {hamb &&
            <div className='text-5xl space-y-5 sticky bg-gray-700 w-4xl p-6 rounded-3xl '>
              <nav className='hover:text-amber-700 cursor-pointer flex items-center space-x-5'> <img src="src\assets\birdnet-logo-circle.png" alt=""  className='w-24'/><p>Birdnet</p></nav>
              <nav className='hover:text-amber-700 cursor-pointer flex items-center space-x-5'><img src="src\assets\OG-TW_Grande-CS-brune_BrockFenton.jpg" alt=""  className='w-24 rounded-4xl'/><p>OpenBat</p></nav>
              <nav className='hover:text-amber-700 cursor-pointer flex items-center space-x-5'><img src="src\assets\raccoon.jpg" alt=""  className='w-24 rounded-4xl'/><p>MegaDetector</p></nav>
            </div>
          }
        </div>


      </header></>
  )
}

export default Header