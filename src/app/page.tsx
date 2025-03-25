'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Form validation schema
const registerSchema = z.object({
  name: z.string().min(2, { message: 'Nombre es requerido' }),
  email: z.string().email({ message: 'Email no válido' }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
});

// Create a type from the schema
type RegisterFormData = z.infer<typeof registerSchema>;

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const onSubmit = async (data: RegisterFormData) => {
    setIsSubmitting(true);
    setSubmitMessage('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Handle registration (this would normally connect to your backend)
    console.log('Registration data:', data);
    setSubmitMessage('¡Registro exitoso! Bienvenido a Somos Locales.');
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        {/* Background placeholder for soccer ball */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gray-800 z-0"></div>
        </div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 relative z-10">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Somos Locales</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">#TIENESQUEVIVIRLO</h2>
            <p className="text-lg mb-6">
              Somos la app para los verdaderos amantes del fútbol. Encuentra estadísticas, 
              participa en quinielas, y forma parte de una comunidad con tu misma pasión.
            </p>
          </div>
          
          {/* Registration Form */}
          <div className="md:w-1/2">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">Regístrate</h3>
              
              {submitMessage && (
                <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nombre completo</label>
                  <input 
                    type="text" 
                    {...register('name')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Correo electrónico</label>
                  <input 
                    type="email" 
                    {...register('email')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Contraseña</label>
                  <input 
                    type="password" 
                    {...register('password')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                  {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-pink-500 text-white py-2 rounded-md font-medium hover:bg-pink-600 transition disabled:opacity-70"
                >
                  {isSubmitting ? 'Procesando...' : 'Registrarse'}
                </button>
                
                <div className="text-center text-sm">
                  <span>O continúa con Google</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Banco de estadísticas</h3>
              <p>Accede a todos los números de tus equipos favoritos y jugadores.</p>
            </div>
            
            {/* Feature Card 2 */}
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Quiniela</h3>
              <p>Participa y gana premios semanales prediciendo resultados.</p>
            </div>
            
            {/* Feature Card 3 */}
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Datos Personalizados</h3>
              <p>Información exclusiva para tus análisis y predicciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Showcase Section */}
      <section className="py-16 px-6 bg-yellow-400 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Conoce la plataforma</h2>
          <p className="text-center max-w-2xl mx-auto mb-12">
            Explora todas las funcionalidades que tenemos para ti. Nuestra app está 
            diseñada para brindarte la mejor experiencia como aficionado al fútbol.
          </p>
          
          {/* App Screenshots - Placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-96 bg-gray-800 rounded-xl mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">El Corazón del Fútbol</h2>
          <p className="text-center mb-12">
            Lo sentimos en los goles, en los triunfos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gray-700 mb-4"></div>
              <h3 className="font-semibold">Koerick Valdez</h3>
              <p className="text-sm text-gray-400">CEO & Fundador</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gray-700 mb-4"></div>
              <h3 className="font-semibold">Ana Paulina Soto</h3>
              <p className="text-sm text-gray-400">CTO & Fundadora</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gray-700 mb-4"></div>
              <h3 className="font-semibold">Mariana García</h3>
              <p className="text-sm text-gray-400">COO</p>
            </div>
            
            {/* Team Member 4 */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gray-700 mb-4"></div>
              <h3 className="font-semibold">Carlos Consuegra</h3>
              <p className="text-sm text-gray-400">CXO & Desarrollador</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}