import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Link } from "react-router-dom";

function Header() {
  const [hamb, sethamb] = useState(false)
  return (
    <>
      <header className="bg-gray-900 text-white p-4 flex flex-col ">
        <div className="flex justify-center items-center mt-4">
          <Link to='/' className='flex'>
            <img src="src\assets\Logo cégep.jpg" alt="" className='h-60 mr-14 rounded-4xl' />
          </Link>
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
            <div className='text-5xl space-y-11 sticky bg-gray-700 w-4xl p-6 rounded-3xl '>
              <Link to='/RedirPageBirdnet'><nav className='hover:text-amber-700 cursor-pointer flex items-center space-x-5 '> <img src="src\assets\birdnet-logo-circle.png" alt="" className='w-24' /><p>Birdnet</p></nav></Link>
              <Link to='/RedirPageOpenbat'><nav className='hover:text-amber-700 cursor-pointer flex items-center space-x-5 mb-5'><img src="src\assets\OG-TW_Grande-CS-brune_BrockFenton.jpg" alt="" className='w-24 rounded-4xl' /><p>BatDetect</p></nav></Link>
              <Link to='/RedirPageMega'><nav className='hover:text-amber-700 cursor-pointer flex items-center space-x-5'><img src="src\assets\raccoon.jpg" alt="" className='w-24 rounded-4xl' /><p>MegaDetector</p></nav></Link>
            </div>
          }
        </div>


      </header></>
  )
}

export default Header