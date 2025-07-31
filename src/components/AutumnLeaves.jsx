import React from 'react'

const AutumnLeaves = () => {
  const leaves = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    color: ['text-orange-400', 'text-red-500', 'text-yellow-500'][Math.floor(Math.random() * 3)],
    animationDelay: Math.random() * 5,
    animationDuration: 8 + Math.random() * 8,
    size: 16 + Math.random() * 8
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Maple tree branch */}
      <svg className="absolute -right-10 top-10 w-48 h-32 text-amber-700/40" viewBox="0 0 200 100">
        <path
          d="M200 50 Q 170 45, 140 48 T 80 46 Q 50 44, 20 50"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      {/* Falling leaves */}
      {leaves.map(leaf => (
        <div
          key={leaf.id}
          className={`absolute ${leaf.color} animate-fall-sway`}
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.animationDelay}s`,
            animationDuration: `${leaf.animationDuration}s`,
            fontSize: `${leaf.size}px`
          }}
        >
          🍁
        </div>
      ))}

      <style jsx>{`
        @keyframes fall-sway {
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
            transform: translateY(220px) translateX(30px) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall-sway {
          animation: fall-sway ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default AutumnLeaves
