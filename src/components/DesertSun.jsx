import React from 'react'

const DesertSun = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Intense sun */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 bg-yellow-300 rounded-full animate-pulse" />
          <div className="absolute inset-2 bg-yellow-400 rounded-full" />
          <div className="absolute inset-0 bg-yellow-300 rounded-full opacity-50 blur-xl scale-150" />
        </div>
      </div>
      
      {/* Heat waves */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2">
        <div className="absolute inset-0 bg-gradient-to-t from-orange-400/20 to-transparent animate-shimmer" />
      </div>

      {/* Sand dunes silhouette */}
      <svg className="absolute bottom-0 left-0 right-0 h-16 text-orange-300/30" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path d="M0,50 Q300,20 600,50 T1200,50 L1200,100 L0,100 Z" fill="currentColor" />
      </svg>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default DesertSun
