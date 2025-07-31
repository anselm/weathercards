import React from 'react'

const CarnivalLights = () => {
  const lights = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    color: ['bg-pink-400', 'bg-yellow-400', 'bg-green-400', 'bg-blue-400', 'bg-purple-400'][i % 5],
    left: (i * 8) + 4,
    animationDelay: i * 0.1
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* String lights across the top */}
      <div className="absolute top-4 left-0 right-0 h-8">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 10" preserveAspectRatio="none">
          <path
            d="M0,5 Q25,3 50,5 T100,5"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
        {lights.map(light => (
          <div
            key={light.id}
            className={`absolute w-3 h-3 ${light.color} rounded-full animate-pulse shadow-lg`}
            style={{
              left: `${light.left}%`,
              top: '50%',
              transform: 'translateY(-50%)',
              animationDelay: `${light.animationDelay}s`,
              boxShadow: `0 0 10px currentColor`
            }}
          />
        ))}
      </div>

      {/* Confetti */}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={`confetti-${i}`}
          className="absolute w-2 h-4 animate-float"
          style={{
            backgroundColor: ['#ec4899', '#eab308', '#10b981', '#3b82f6', '#8b5cf6'][i % 5],
            left: `${15 + i * 15}%`,
            top: '60%',
            transform: `rotate(${Math.random() * 360}deg)`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default CarnivalLights
