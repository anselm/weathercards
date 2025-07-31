import React from 'react'

const CherryBlossoms = () => {
  // Generate random positions for cherry blossom petals
  const petals = Array.from({ length: 8 }, (_, i) => ({
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
        className="absolute -right-5 top-5 w-32 h-32 text-pink-300 opacity-60"
        viewBox="0 0 200 200"
      >
        <path
          d="M180 50 Q 150 45, 120 48 T 80 46 Q 50 44, 20 50"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <circle cx="150" cy="46" r="4" fill="currentColor" />
        <circle cx="120" cy="48" r="5" fill="currentColor" />
        <circle cx="90" cy="47" r="4" fill="currentColor" />
        <circle cx="60" cy="45" r="5" fill="currentColor" />
        <circle cx="135" cy="47" r="4" fill="currentColor" />
        <circle cx="105" cy="47" r="4" fill="currentColor" />
        <circle cx="75" cy="46" r="4" fill="currentColor" />
      </svg>

      {/* Falling petals */}
      {petals.map(petal => (
        <div
          key={petal.id}
          className="absolute animate-drift"
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
        @keyframes drift {
          0% {
            transform: translateY(-20px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(220px) translateX(-50px) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-drift {
          animation: drift linear infinite;
        }
      `}</style>
    </div>
  )
}

export default CherryBlossoms
