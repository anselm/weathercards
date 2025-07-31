import React from 'react'

const NorthernLights = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Aurora effect using gradients */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-green-400 to-transparent transform skew-x-12 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-400 to-transparent transform -skew-x-12 animate-pulse animation-delay-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-400 to-transparent animate-pulse animation-delay-2000" />
      </div>
      
      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 50}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}

export default NorthernLights
