import React from 'react'
import MoonIcon from './MoonIcon'
import CherryBlossoms from './CherryBlossoms'
import NorthernLights from './NorthernLights'
import DesertSun from './DesertSun'
import AutumnLeaves from './AutumnLeaves'
import CarnivalLights from './CarnivalLights'
import RainStorm from './RainStorm'
import SnowFall from './SnowFall'
import SunPosition from './SunPosition'

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
    specialEvent,
    weatherCondition,
    sunElevation,
    sunVisible,
    cloudCoverage
  } = data

  // Determine card background based on time of day and weather
  const getBackgroundGradient = () => {
    // Override for stormy weather
    if (weatherCondition && (weatherCondition.type === 'storm' || weatherCondition.type === 'rain')) {
      return 'from-gray-700 via-gray-600 to-gray-500'
    }
    
    // Override for snowy weather
    if (weatherCondition && weatherCondition.type === 'snow') {
      return 'from-gray-200 via-blue-100 to-gray-300'
    }
    
    // Normal time-based gradients
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
  const moonRightPosition = `${moonElevation}%`

  // Render special event component
  const renderSpecialEvent = () => {
    switch (specialEvent) {
      case 'cherry-blossom':
        return <CherryBlossoms />
      case 'northern-lights':
        return <NorthernLights />
      case 'desert-heat':
        return <DesertSun />
      case 'autumn-leaves':
        return <AutumnLeaves />
      case 'carnival':
        return <CarnivalLights />
      default:
        return null
    }
  }

  // Render weather condition effects
  const renderWeatherEffect = () => {
    if (!weatherCondition) return null;
    
    switch (weatherCondition.type) {
      case 'rain':
      case 'storm':
        return <RainStorm intensity={weatherCondition.intensity} />
      case 'snow':
        return <SnowFall intensity={weatherCondition.intensity} />
      default:
        return null
    }
  }

  // Add a subtle animation when cards load
  return (
    <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${getBackgroundGradient()}`} />
      
      {/* Special event visualization */}
      {renderSpecialEvent()}

      {/* Weather effects (rain, snow, etc.) */}
      {renderWeatherEffect()}

      {/* Sun position indicator */}
      <SunPosition elevation={sunElevation} isVisible={sunVisible} />

      {/* Moon - positioned on the right side */}
      {timeOfDay === 'night' && (
        <div 
          className="absolute top-8 w-12 h-12 transition-all duration-1000"
          style={{ right: `${moonRightPosition}px` }}
        >
          <MoonIcon phase={moonPhase} />
        </div>
      )}

      {/* Cloud coverage indicator */}
      {cloudCoverage > 20 && (
        <div className="absolute top-0 left-0 right-0 h-full pointer-events-none">
          <div 
            className="absolute inset-0 bg-gradient-to-b from-gray-300/20 to-transparent"
            style={{ opacity: cloudCoverage / 100 }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-between p-8">
        {/* Left section */}
        <div className="flex items-center space-x-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-1">{city}</h2>
            <p className="text-lg text-white/80">{country}</p>
            <p className="text-xs text-white/60 mt-1">
              {Math.abs(coordinates.lat).toFixed(2)}°{coordinates.lat >= 0 ? 'N' : 'S'}, {Math.abs(coordinates.lon).toFixed(2)}°{coordinates.lon >= 0 ? 'E' : 'W'}
            </p>
          </div>
          
          <div className="text-5xl font-light text-white">
            {temperature}°
          </div>
        </div>

        {/* Right section */}
        <div className="text-right">
          <p className="text-white/80 capitalize">{weather}</p>
          <p className="text-white/60 text-sm mt-1">
            {season} • {timeOfDay}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
