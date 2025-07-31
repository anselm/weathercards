import React from 'react'

const CherryBlossoms = () => {
  // Generate random positions for cherry blossom petals
  const petals = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 5,
    animationDuration: 10 + Math.random() * 10,
    size: 8 + Math.random() * 12
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cherry blossom branches */}
      <svg 
        className="absolute -left-10 top-20 w-48 h-48 text-pink-300 opacity-60"
        viewBox="0 0 200 200"
      >
        <path
          d="M20 100 Q 50 80, 80 90 T 120 85 Q 140 82, 160 88"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <circle cx="50" cy="85" r="4" fill="currentColor" />
        <circle cx="80" cy="90" r="5" fill="currentColor" />
        <circle cx="110" cy="86" r="4" fill="currentColor" />
        <circle cx="140" cy="84" r="5" fill="currentColor" />
        <circle cx="65" cy="88" r="4" fill="currentColor" />
        <circle cx="95" cy="88" r="4" fill="currentColor" />
        <circle cx="125" cy="85" r="4" fill="currentColor" />
      </svg>

      {/* Falling petals */}
      {petals.map(petal => (
        <div
          key={petal.id}
          className="absolute animate-fall"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.animationDelay}s`,
            animationDuration: `${petal.animationDuration}s`,
            fontSize: `${petal.size}px`
          }}
        >
          🌸
        </div>
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(620px) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  )
}

export default CherryBlossoms
