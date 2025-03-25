import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">SomosLocales</h1>
      </div>
      <nav className="hidden md:flex space-x-6">
        <Link href="/" className="hover:text-yellow-400">Inicio</Link>
        <Link href="/quiniela" className="hover:text-yellow-400">Quiniela</Link>
        <Link href="#" className="hover:text-yellow-400">Nosotros</Link>
        <Link href="#" className="hover:text-yellow-400">Contacto</Link>
      </nav>
      <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-medium">
        Iniciar sesión
      </button>
    </header>
  )
}