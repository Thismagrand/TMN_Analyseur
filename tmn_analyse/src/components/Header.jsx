function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold">
        Mon site
      </h1>

      <nav>
        <a href="/" className="mr-4">Accueil</a>
        <a href="/about">À propos</a>
      </nav>
    </header>
  )
}

export default Header