import React from 'react'

const SnowFall = ({ intensity = 'moderate' }) => {
  const flakeCount = intensity === 'heavy' ? 50 : intensity === 'light' ? 20 : 35;
  const snowflakes = Array.from({ length: flakeCount }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 10,
    animationDuration: 5 + Math.random() * 10,
    size: 4 + Math.random() * 8,
    opacity: 0.4 + Math.random() * 0.6
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Snow accumulation at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/30 to-transparent" />
      
      {/* Falling snowflakes */}
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className="absolute text-white animate-snow"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.animationDelay}s`,
            animationDuration: `${flake.animationDuration}s`,
            fontSize: `${flake.size}px`,
            opacity: flake.opacity
          }}
        >
          ❄
        </div>
      ))}

      <style jsx>{`
        @keyframes snow {
          0% {
            transform: translateY(-20px) translateX(0);
          }
          50% {
            transform: translateY(110px) translateX(20px);
          }
          100% {
            transform: translateY(220px) translateX(-20px);
          }
        }
        .animate-snow {
          animation: snow ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default SnowFall
