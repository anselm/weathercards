import React from 'react'

const RainStorm = ({ intensity = 'moderate' }) => {
  // Generate rain drops based on intensity
  const dropCount = intensity === 'heavy' ? 40 : intensity === 'light' ? 15 : 25;
  const drops = Array.from({ length: dropCount }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 2,
    animationDuration: 0.5 + Math.random() * 0.5,
    opacity: 0.3 + Math.random() * 0.4
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dark storm clouds */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-gray-800/40 to-transparent" />
      
      {/* Rain drops */}
      {drops.map(drop => (
        <div
          key={drop.id}
          className="absolute w-0.5 h-8 bg-blue-300 animate-rain"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.animationDelay}s`,
            animationDuration: `${drop.animationDuration}s`,
            opacity: drop.opacity
          }}
        />
      ))}

      {/* Lightning flashes for heavy storms */}
      {intensity === 'heavy' && (
        <div className="absolute inset-0 animate-lightning pointer-events-none">
          <div className="absolute inset-0 bg-white/20" />
        </div>
      )}

      <style jsx>{`
        @keyframes rain {
          0% {
            transform: translateY(-100px);
          }
          100% {
            transform: translateY(300px);
          }
        }
        @keyframes lightning {
          0%, 95%, 100% {
            opacity: 0;
          }
          96%, 98% {
            opacity: 1;
          }
        }
        .animate-rain {
          animation: rain linear infinite;
        }
        .animate-lightning {
          animation: lightning 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default RainStorm
