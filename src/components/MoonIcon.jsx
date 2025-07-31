import React from 'react'

const MoonIcon = ({ phase }) => {
  // Simple moon phase representation using SVG
  const getMoonPath = () => {
    switch (phase) {
      case 'new':
        return 'M32 16a16 16 0 1 0 0 32 16 16 0 0 0 0-32z' // Full dark circle
      case 'waxing-crescent':
        return 'M32 16c-8.837 0-16 7.163-16 16s7.163 16 16 16c4.418 0 8.418-1.791 11.313-4.687C40.418 40.418 38 35.418 38 30s2.418-10.418 5.313-13.313C40.418 17.791 36.418 16 32 16z'
      case 'first-quarter':
        return 'M32 16v32c8.837 0 16-7.163 16-16s-7.163-16-16-16z'
      case 'waxing-gibbous':
        return 'M32 16c-8.837 0-16 7.163-16 16s7.163 16 16 16c6.627 0 12.313-4.03 14.743-9.743C44.313 33.97 38.627 30 32 30s-12.313-3.97-14.743-9.743C19.687 20.03 25.373 16 32 16z'
      case 'full':
        return 'M32 16a16 16 0 1 1 0 32 16 16 0 0 1 0-32z' // Full bright circle
      case 'waning-gibbous':
        return 'M32 16c8.837 0 16 7.163 16 16s-7.163 16-16 16c-6.627 0-12.313-4.03-14.743-9.743C19.687 33.97 25.373 30 32 30s12.313-3.97 14.743-9.743C44.313 20.03 38.627 16 32 16z'
      case 'third-quarter':
        return 'M32 16c-8.837 0-16 7.163-16 16s7.163 16 16 16V16z'
      case 'waning-crescent':
        return 'M32 16c8.837 0 16 7.163 16 16s-7.163 16-16 16c-4.418 0-8.418-1.791-11.313-4.687C23.582 40.418 26 35.418 26 30s-2.418-10.418-5.313-13.313C23.582 17.791 27.582 16 32 16z'
      default:
        return 'M32 16a16 16 0 1 1 0 32 16 16 0 0 1 0-32z'
    }
  }

  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <defs>
        <radialGradient id="moonGlow">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </radialGradient>
      </defs>
      
      {/* Glow effect */}
      <circle cx="32" cy="32" r="24" fill="url(#moonGlow)" opacity="0.5" />
      
      {/* Moon shape */}
      <path 
        d={getMoonPath()} 
        fill={phase === 'new' ? '#1a1a2e' : '#fffacd'}
        opacity={phase === 'new' ? 0.3 : 1}
      />
    </svg>
  )
}

export default MoonIcon
