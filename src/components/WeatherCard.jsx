import React from 'react'
import MoonIcon from './MoonIcon'
import CherryBlossoms from './CherryBlossoms'

const WeatherCard = ({ data }) => {
  const {
    city,
    country,
    coordinates,
    timeOfDay,
    season,
    weather,
    temperature,
    moonPhase,
    moonElevation,
    specialEvent
  } = data

  // Determine card background based on time of day
  const getBackgroundGradient = () => {
    switch (timeOfDay) {
      case 'morning':
        return 'from-orange-200 via-pink-200 to-blue-300'
      case 'afternoon':
        return 'from-blue-400 via-blue-300 to-blue-200'
      case 'evening':
        return 'from-purple-400 via-pink-400 to-orange-400'
      case 'night':
        return 'from-indigo-900 via-purple-900 to-pink-900'
      default:
        return 'from-blue-400 to-blue-600'
    }
  }

  // Calculate moon position based on elevation
  const moonBottomPosition = `${moonElevation}%`

  return (
    <div className="relative w-96 h-[600px] rounded-3xl overflow-hidden shadow-2xl">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${getBackgroundGradient()}`} />
      
      {/* Moon */}
      <div 
        className="absolute right-8 w-16 h-16 transition-all duration-1000"
        style={{ bottom: moonBottomPosition }}
      >
        <MoonIcon phase={moonPhase} />
      </div>

      {/* Cherry blossoms for spring in Tokyo */}
      {specialEvent === 'cherry-blossom' && (
        <CherryBlossoms />
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Top section */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-2">{city}</h2>
          <p className="text-xl text-white/80">{country}</p>
          <p className="text-sm text-white/60 mt-1">
            {coordinates.lat.toFixed(2)}°N, {coordinates.lon.toFixed(2)}°E
          </p>
        </div>

        {/* Bottom section */}
        <div>
          <div className="text-6xl font-light text-white mb-2">
            {temperature}°
          </div>
          <p className="text-white/80 capitalize">{weather}</p>
          <p className="text-white/60 text-sm mt-2">
            {season} • {timeOfDay}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
