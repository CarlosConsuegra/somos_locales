'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
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
  const [activeSlide, setActiveSlide] = useState(0);

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

  // Placeholder app screenshots for carousel
  const appScreenshots = [1, 2, 3, 4, 5];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20">
        {/* Background image with soccer ball */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gray-700 z-0">
            {/* Placeholder for soccer ball background */}
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/soccer-ball-bg.jpg')" }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 z-10 relative">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Content */}
            <div className="md:w-1/2">
              <h2 className="text-yellow-400 text-2xl font-bold mb-4">#TIENESQUEVIVIRLO</h2>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Somos Locales</h1>
              <p className="text-lg mb-8">
                Somos una plataforma deportiva que te ofrece una experiencia única y emocionante. 
                Participa en quinielas, reta a tus amigos y demuestra quién sabe más. 
                Encuentra horarios, boletos y los mejores tips para disfrutar del fútbol femenil y masculino.
              </p>
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-bold hover:bg-yellow-500 transition">
                ¡Únete y vive la pasión!
              </button>
            </div>
            {/* Registration Form */}
            <div className="md:w-1/2">
              <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-center">Regístrate</h3>
                <p className="text-center text-gray-500 text-sm mb-4">¡Sé parte de SomosLocales!</p>
                
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
                      placeholder="Escribe tu nombre"
                      {...register('name')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Correo electrónico</label>
                    <input 
                      type="email" 
                      placeholder="Escribe tu correo"
                      {...register('email')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Contraseña</label>
                    <input 
                      type="password" 
                      placeholder="Escribe tu contraseña"
                      {...register('password')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-pink-500 text-white py-2 rounded-md font-medium hover:bg-pink-600 transition disabled:opacity-70"
                  >
                    {isSubmitting ? 'Procesando...' : 'Siguiente'}
                  </button>
                  
                  <div className="flex items-center justify-center space-x-2 pt-2">
                    <hr className="w-full border-gray-300" />
                    <span className="text-gray-500 text-sm">o</span>
                    <hr className="w-full border-gray-300" />
                  </div>
                  
                  <button 
                    type="button"
                    className="w-full flex items-center justify-center space-x-2 border border-gray-300 py-2 rounded-md text-gray-700"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      <path fill="none" d="M1 1h22v22H1z" />
                    </svg>
                    <span>Continuar con Google</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Cards Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Guías de estadios</h3>
              <p className="text-gray-400">
                Encuentra información de cómo llegar, cómo comprar, horarios y opciones de transporte.
              </p>
            </div>
            
            {/* Feature Card 2 */}
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quiniela</h3>
              <p className="text-gray-400">
                Reta a tus amigos en tu quiniela y demuestra que eres el verdadero experto.
              </p>
            </div>
            
            {/* Feature Card 3 */}
            <div className="text-center">
              <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">🏅</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Gana recompensas</h3>
              <p className="text-gray-400">
                Sube de nivel en el ranking y compite por increíbles premios mientras disfrutas del fútbol.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Platform Showcase Section */}
      <section className="py-16 bg-yellow-400 text-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Conoce la plataforma</h2>
          <p className="text-center max-w-2xl mx-auto mb-12">
            Explora todas las funcionalidades que tenemos para ti. Nuestra app está 
            diseñada para brindarte la mejor experiencia como aficionado al fútbol.
          </p>
          
          {/* App Screenshots Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-300 ease-in-out" 
                   style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {appScreenshots.map((_, index) => (
                  <div key={index} className="min-w-full flex justify-center p-4">
                    <div className="bg-gray-800 w-64 h-96 rounded-3xl overflow-hidden">
                      {/* This would be your app screenshot */}
                      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-phone-app.jpg')" }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => setActiveSlide(prev => Math.max(0, prev - 1))}
              className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white"
              disabled={activeSlide === 0}
            >
              ←
            </button>
            <button 
              onClick={() => setActiveSlide(prev => Math.min(appScreenshots.length - 1, prev + 1))}
              className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white"
              disabled={activeSlide === appScreenshots.length - 1}
            >
              →
            </button>
            
            {/* Carousel Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {appScreenshots.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-pink-500' : 'bg-gray-700'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">El Corazón del Fútbol</h2>
          <p className="text-center mb-12 text-gray-400">
            La esencia de las gradas en tu hogar.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-16">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gray-700 mb-4 overflow-hidden">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-profile.jpg')" }}></div>
              </div>
              <h3 className="font-semibold">Karla H. Valdez</h3>
              <p className="text-sm text-gray-400">CEO & Fundadora</p>
              <div className="flex space-x-2 mt-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 002.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gray-700 mb-4 overflow-hidden">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/placeholder-profile.jpg')" }}></div>
              </div>
              <h3 className="font-semibold">Ana Paulina Sosa</h3>
              <p className="text-sm text-gray-400">CTO & Fundadora</p>
              <div className="flex space-x-2 mt-2">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 002.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Join Community Section */}
      <section className="py-16 px-6 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/stadium-bg.jpg)' }}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">Únete a la comunidad</h2>
          <p className="text-center max-w-2xl mx-auto mb-12">
            Interactúa con otros aficionados, comparte tus experiencias en las tribunas,
            y únete a conversaciones emocionantes sobre el deporte que amamos.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ingresa tu email"
                className="flex-grow px-4 py-3 rounded-l-md focus:outline-none text-black"
              />
              <button className="bg-pink-500 text-white px-6 py-3 rounded-r-md font-medium hover:bg-pink-600 transition">
                Suscribirme
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Al suscribirme acepto los <a href="#" className="underline">Términos y Condiciones</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}