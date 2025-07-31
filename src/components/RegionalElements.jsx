import React from 'react'

const RegionalElements = ({ city, season }) => {
  const getElements = () => {
    // Arctic regions
    if (['Reykjavik', 'Stockholm', 'Moscow'].includes(city) && season === 'winter') {
      return (
        <div className="absolute bottom-0 left-10">
          {/* Polar bear or seal silhouette */}
          <svg className="w-16 h-12 text-gray-700/20" viewBox="0 0 80 60">
            <ellipse cx="40" cy="40" rx="25" ry="15" fill="currentColor" />
            <ellipse cx="20" cy="35" rx="10" ry="12" fill="currentColor" />
            <circle cx="15" cy="30" r="3" fill="currentColor" />
          </svg>
        </div>
      )
    }

    // Desert regions
    if (['Cairo', 'Dubai'].includes(city)) {
      return (
        <div className="absolute bottom-0 left-20">
          {/* Camel silhouette */}
          <svg className="w-20 h-16 text-gray-700/20" viewBox="0 0 100 80">
            <ellipse cx="30" cy="50" rx="20" ry="15" fill="currentColor" />
            <ellipse cx="60" cy="45" rx="18" ry="13" fill="currentColor" />
            <rect x="25" y="50" width="4" height="20" fill="currentColor" />
            <rect x="35" y="50" width="4" height="20" fill="currentColor" />
            <rect x="55" y="45" width="4" height="25" fill="currentColor" />
            <rect x="65" y="45" width="4" height="25" fill="currentColor" />
            <path d="M60 32 Q65 20, 70 25 Q75 30, 70 35" fill="currentColor" />
          </svg>
        </div>
      )
    }

    // Tropical regions
    if (['Rio de Janeiro', 'Bangkok', 'Singapore', 'Mumbai'].includes(city)) {
      return (
        <div className="absolute top-10 left-10">
          {/* Palm trees */}
          <svg className="w-16 h-20 text-gray-700/20" viewBox="0 0 80 100">
            <rect x="38" y="50" width="4" height="50" fill="currentColor" />
            <path d="M40 50 Q20 40, 15 45 Q10 50, 20 55 M40 50 Q60 40, 65 45 Q70 50, 60 55 M40 50 Q30 30, 25 30 Q20 30, 30 40 M40 50 Q50 30, 55 30 Q60 30, 50 40" 
                  stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>
      )
    }

    // Mountain regions
    if (['Vancouver', 'Mexico City'].includes(city)) {
      return (
        <svg className="absolute bottom-0 left-0 w-full h-16 text-gray-700/10" viewBox="0 0 400 60" preserveAspectRatio="none">
          {/* Mountain range */}
          <path d="M0 60 L50 20 L100 40 L150 10 L200 35 L250 25 L300 45 L350 15 L400 50 L400 60 Z" 
                fill="currentColor" />
        </svg>
      )
    }

    return null
  }

  return getElements()
}

export default RegionalElements
