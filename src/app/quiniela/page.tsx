'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

// Define types for match data
type Match = {
  id: number;
  homeTeam: string;
  awayTeam: string;
  date: string;
};

// Define type for predictions
type Predictions = {
  [key: number]: 'home' | 'draw' | 'away';
};

export default function Quiniela() {
  // Sample data for matches
  const [matches] = useState<Match[]>([
    { id: 1, homeTeam: 'Barcelona', awayTeam: 'Real Madrid', date: '15 Mayo, 2023' },
    { id: 2, homeTeam: 'Atlético Madrid', awayTeam: 'Sevilla', date: '15 Mayo, 2023' },
    { id: 3, homeTeam: 'Valencia', awayTeam: 'Athletic Bilbao', date: '16 Mayo, 2023' },
    { id: 4, homeTeam: 'Villarreal', awayTeam: 'Real Sociedad', date: '16 Mayo, 2023' },
    { id: 5, homeTeam: 'Celta Vigo', awayTeam: 'Espanyol', date: '17 Mayo, 2023' },
  ]);

  // State for predictions
  const [predictions, setPredictions] = useState<Predictions>({});

  // Handle prediction selection
  const handlePrediction = (matchId: number, prediction: 'home' | 'draw' | 'away') => {
    setPredictions({
      ...predictions,
      [matchId]: prediction
    });
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <div className="container mx-auto px-6 py-12">
        {/* Liga BBVA Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-2">
            <h1 className="text-3xl font-bold text-blue-600">LIGA</h1>
            <h1 className="text-3xl font-bold">BBVA</h1>
          </div>
          <p className="text-gray-600">JORNADA 12/38</p>
        </div>

        {/* Quiniela Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Quiniela</h2>
          <p className="text-gray-600 mb-8">
            ¡Haz tus predicciones para ganar! Completa el formulario.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {matches.map((match) => (
              <div key={match.id} className="bg-gray-50 rounded-lg p-4 shadow-sm">
                <div className="text-sm text-gray-500 mb-2">{match.date}</div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">{match.homeTeam}</span>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handlePrediction(match.id, 'home')}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        predictions[match.id] === 'home' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      1
                    </button>
                    <button 
                      onClick={() => handlePrediction(match.id, 'draw')}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        predictions[match.id] === 'draw' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      X
                    </button>
                    <button 
                      onClick={() => handlePrediction(match.id, 'away')}
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        predictions[match.id] === 'away' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      2
                    </button>
                  </div>
                  <span className="font-medium">{match.awayTeam}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-md font-medium">
              Enviar Predicciones
            </button>
          </div>
        </section>

        {/* Rankings Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Ranking DE LA MEJOR JORNADA</h2>
          
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Top 3 Ranking */}
            <div className="flex justify-around py-8 bg-gray-100">
              {/* User 1 (Position 1) */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-300 mb-2"></div>
                <span className="font-medium">María García</span>
                <div className="flex items-center bg-black text-white px-3 py-1 rounded-full text-sm mt-2">
                  <span>45</span>
                  <span className="ml-1">pts</span>
                </div>
              </div>
              
              {/* User 2 (Position 2) */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-300 mb-2"></div>
                <span className="font-medium">Juan López</span>
                <div className="flex items-center bg-black text-white px-3 py-1 rounded-full text-sm mt-2">
                  <span>42</span>
                  <span className="ml-1">pts</span>
                </div>
              </div>
              
              {/* User 3 (Position 3) */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-300 mb-2"></div>
                <span className="font-medium">Ana Martínez</span>
                <div className="flex items-center bg-black text-white px-3 py-1 rounded-full text-sm mt-2">
                  <span>39</span>
                  <span className="ml-1">pts</span>
                </div>
              </div>
            </div>
            
            {/* Full Ranking Table */}
            <div className="p-4">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-left">
                    <th className="pb-2">Pos.</th>
                    <th className="pb-2">Participante</th>
                    <th className="pb-2 text-right">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {[4, 5, 6, 7, 8].map((position) => (
                    <tr key={position} className="border-b">
                      <td className="py-3">{position}</td>
                      <td className="py-3 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                        Usuario {position}
                      </td>
                      <td className="py-3 text-right">{45 - position * 2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}