import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Somos Locales</h2>
            <p className="text-gray-400">La app para los verdaderos amantes del fútbol.</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Compañía</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-yellow-400">Sobre nosotros</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">Contacto</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">Prensa</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Términos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-yellow-400">Privacidad</Link></li>
              <li><Link href="#" className="hover:text-yellow-400">Términos de uso</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Redes</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-yellow-400">FB</Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400">TW</Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400">IG</Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400">YT</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Somos Locales. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}