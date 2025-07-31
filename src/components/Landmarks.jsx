import React from 'react'

const Landmarks = ({ city }) => {
  const getLandmark = () => {
    switch (city) {
      case 'Paris':
        return (
          <svg className="absolute bottom-0 right-10 w-24 h-32 text-gray-800/20" viewBox="0 0 100 150">
            {/* Eiffel Tower simplified */}
            <path d="M50 10 L40 40 L30 70 L20 100 L10 130 L15 140 L85 140 L90 130 L80 100 L70 70 L60 40 L50 10 Z" 
                  fill="currentColor" />
            <path d="M30 70 L70 70 M20 100 L80 100" 
                  stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        )
      
      case 'London':
        return (
          <svg className="absolute bottom-0 right-10 w-20 h-28 text-gray-800/20" viewBox="0 0 80 120">
            {/* Big Ben simplified */}
            <rect x="25" y="40" width="30" height="80" fill="currentColor" />
            <rect x="20" y="30" width="40" height="10" fill="currentColor" />
            <path d="M40 10 L30 30 L50 30 Z" fill="currentColor" />
            <circle cx="40" cy="55" r="8" fill="white" fillOpacity="0.3" />
          </svg>
        )
      
      case 'New York':
        return (
          <svg className="absolute bottom-0 right-5 w-32 h-32 text-gray-800/20" viewBox="0 0 150 120">
            {/* NYC Skyline simplified */}
            <rect x="10" y="60" width="15" height="60" fill="currentColor" />
            <rect x="30" y="40" width="20" height="80" fill="currentColor" />
            <rect x="55" y="20" width="15" height="100" fill="currentColor" />
            <rect x="75" y="50" width="25" height="70" fill="currentColor" />
            <rect x="105" y="35" width="18" height="85" fill="currentColor" />
            <rect x="128" y="55" width="15" height="65" fill="currentColor" />
          </svg>
        )
      
      case 'Sydney':
        return (
          <svg className="absolute bottom-0 right-10 w-32 h-20 text-gray-800/20" viewBox="0 0 120 60">
            {/* Opera House simplified */}
            <path d="M10 50 Q20 20, 30 50 M30 50 Q40 15, 50 50 M50 50 Q60 10, 70 50 M70 50 Q80 15, 90 50 M90 50 Q100 20, 110 50" 
                  stroke="currentColor" strokeWidth="3" fill="none" />
            <line x1="0" y1="50" x2="120" y2="50" stroke="currentColor" strokeWidth="2" />
          </svg>
        )
      
      case 'Dubai':
        return (
          <svg className="absolute bottom-0 right-10 w-16 h-36 text-gray-800/20" viewBox="0 0 60 140">
            {/* Burj Khalifa simplified */}
            <path d="M30 0 L25 20 L20 40 L15 80 L10 120 L10 140 L50 140 L50 120 L45 80 L40 40 L35 20 L30 0 Z" 
                  fill="currentColor" />
            <line x1="30" y1="0" x2="30" y2="140" stroke="white" strokeWidth="1" opacity="0.3" />
          </svg>
        )
      
      case 'Moscow':
        return (
          <svg className="absolute bottom-0 right-10 w-28 h-28 text-gray-800/20" viewBox="0 0 100 100">
            {/* St. Basil's Cathedral domes simplified */}
            <path d="M20 70 Q20 50, 30 40 Q40 30, 40 20 Q40 10, 35 5 Q30 0, 25 5 Q20 10, 20 20 Q20 30, 30 40" 
                  fill="currentColor" />
            <rect x="15" y="70" width="20" height="30" fill="currentColor" />
            <path d="M60 70 Q60 50, 70 40 Q80 30, 80 20 Q80 10, 75 5 Q70 0, 65 5 Q60 10, 60 20 Q60 30, 70 40" 
                  fill="currentColor" />
            <rect x="55" y="70" width="20" height="30" fill="currentColor" />
            <circle cx="50" cy="85" r="15" fill="currentColor" />
          </svg>
        )
      
      case 'Tokyo':
        return (
          <svg className="absolute bottom-0 right-10 w-20 h-32 text-gray-800/20" viewBox="0 0 80 120">
            {/* Tokyo Tower simplified */}
            <path d="M40 10 L30 40 L20 80 L10 120 L70 120 L60 80 L50 40 L40 10 Z" 
                  fill="currentColor" />
            <line x1="20" y1="80" x2="60" y2="80" stroke="white" strokeWidth="2" opacity="0.3" />
            <line x1="30" y1="40" x2="50" y2="40" stroke="white" strokeWidth="2" opacity="0.3" />
          </svg>
        )
      
      case 'Cairo':
        return (
          <svg className="absolute bottom-0 right-5 w-36 h-24 text-gray-800/20" viewBox="0 0 140 80">
            {/* Pyramids simplified */}
            <path d="M30 80 L50 20 L70 80 Z" fill="currentColor" />
            <path d="M60 80 L85 10 L110 80 Z" fill="currentColor" />
            <path d="M100 80 L115 40 L130 80 Z" fill="currentColor" />
          </svg>
        )
      
      case 'Rio de Janeiro':
        return (
          <svg className="absolute bottom-0 right-10 w-24 h-32 text-gray-800/20" viewBox="0 0 100 120">
            {/* Christ the Redeemer simplified */}
            <rect x="45" y="80" width="10" height="40" fill="currentColor" />
            <rect x="20" y="60" width="60" height="8" fill="currentColor" />
            <circle cx="50" cy="40" r="8" fill="currentColor" />
            <rect x="46" y="48" width="8" height="20" fill="currentColor" />
          </svg>
        )
      
      case 'Reykjavik':
        return (
          <svg className="absolute bottom-0 right-10 w-32 h-20 text-gray-800/20" viewBox="0 0 120 80">
            {/* Hallgrímskirkja simplified */}
            <path d="M60 10 L55 80 L65 80 Z" fill="currentColor" />
            <path d="M45 20 L42 80 L48 80 Z" fill="currentColor" />
            <path d="M75 20 L72 80 L78 80 Z" fill="currentColor" />
            <path d="M30 30 L28 80 L34 80 Z" fill="currentColor" />
            <path d="M90 30 L88 80 L94 80 Z" fill="currentColor" />
          </svg>
        )
      
      case 'Mumbai':
        return (
          <svg className="absolute bottom-0 right-10 w-28 h-24 text-gray-800/20" viewBox="0 0 100 80">
            {/* Gateway of India simplified */}
            <rect x="20" y="40" width="60" height="40" fill="currentColor" />
            <path d="M30 40 Q30 20, 50 20 Q70 20, 70 40" fill="currentColor" />
            <rect x="35" y="50" width="10" height="30" fill="white" fillOpacity="0.2" />
            <rect x="55" y="50" width="10" height="30" fill="white" fillOpacity="0.2" />
          </svg>
        )
      
      case 'Bangkok':
        return (
          <svg className="absolute bottom-0 right-10 w-24 h-28 text-gray-800/20" viewBox="0 0 90 100">
            {/* Thai temple simplified */}
            <path d="M45 10 L30 30 L60 30 Z" fill="currentColor" />
            <path d="M45 25 L25 45 L65 45 Z" fill="currentColor" />
            <rect x="20" y="45" width="50" height="5" fill="currentColor" />
            <rect x="25" y="50" width="40" height="30" fill="currentColor" />
            <rect x="30" y="80" width="30" height="20" fill="currentColor" />
          </svg>
        )
      
      case 'Singapore':
        return (
          <svg className="absolute bottom-0 right-10 w-32 h-24 text-gray-800/20" viewBox="0 0 120 80">
            {/* Marina Bay Sands simplified */}
            <rect x="10" y="40" width="15" height="40" fill="currentColor" />
            <rect x="35" y="40" width="15" height="40" fill="currentColor" />
            <rect x="60" y="40" width="15" height="40" fill="currentColor" />
            <rect x="5" y="35" width="75" height="8" fill="currentColor" />
            {/* Gardens by the Bay tree */}
            <ellipse cx="95" cy="60" rx="8" ry="15" fill="currentColor" />
            <rect x="93" y="60" width="4" height="20" fill="currentColor" />
          </svg>
        )
      
      case 'Stockholm':
        return (
          <svg className="absolute bottom-0 right-10 w-32 h-20 text-gray-800/20" viewBox="0 0 120 80">
            {/* Nordic houses simplified */}
            <rect x="10" y="40" width="20" height="40" fill="currentColor" />
            <path d="M10 40 L20 20 L30 40" fill="currentColor" />
            <rect x="40" y="35" width="25" height="45" fill="currentColor" />
            <path d="M40 35 L52.5 15 L65 35" fill="currentColor" />
            <rect x="75" y="45" width="18" height="35" fill="currentColor" />
            <path d="M75 45 L84 25 L93 45" fill="currentColor" />
          </svg>
        )
      
      default:
        return null
    }
  }

  return getLandmark()
}

export default Landmarks
