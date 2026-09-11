function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <h1 className="text-6xl font-bold mr-5">
          Techniques des Milieux Naturels
        </h1>
        <h1 className="text-5xl font-light italic text-emerald-200">analyse</h1>
      </div>


      <nav className="text-2xl mt-5">
        <a href="/" className="mr-4 hover:text-amber-400">WorkInProgress</a>
        <a href="/about" className="hover:text-amber-400">WorkInProgress</a>
      </nav>
    </header>
  )
}

export default Header