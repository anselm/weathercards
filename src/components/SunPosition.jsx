import React from 'react'

const SunPosition = ({ elevation, isVisible }) => {
  if (!isVisible) return null;

  // Calculate position based on elevation (0-90 degrees)
  // Map to percentage from bottom (10% to 80%)
  const bottomPosition = 10 + (elevation / 90) * 70;

  return (
    <div 
      className="absolute left-8 w-16 h-16 transition-all duration-1000"
      style={{ bottom: `${bottomPosition}%` }}
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-yellow-400 rounded-full" />
        <div className="absolute inset-0 bg-yellow-300 rounded-full blur-xl scale-150 opacity-50" />
        {/* Sun rays */}
        <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 64 64">
          {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
            <line
              key={angle}
              x1="32"
              y1="32"
              x2="32"
              y2="8"
              stroke="rgba(251, 191, 36, 0.6)"
              strokeWidth="2"
              transform={`rotate(${angle} 32 32)`}
            />
          ))}
        </svg>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default SunPosition
