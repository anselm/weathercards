import WeatherCard from './components/WeatherCard'

// Fake data for multiple cities
const citiesData = [
  {
    city: 'Tokyo',
    country: 'Japan',
    coordinates: { lat: 35.6762, lon: 139.6503 },
    timeOfDay: 'evening',
    season: 'spring',
    weather: 'clear',
    temperature: 18,
    moonPhase: 'waxing-crescent',
    moonElevation: 45,
    specialEvent: 'cherry-blossom'
  },
  {
    city: 'Reykjavik',
    country: 'Iceland',
    coordinates: { lat: 64.1466, lon: -21.9426 },
    timeOfDay: 'night',
    season: 'winter',
    weather: 'aurora',
    temperature: -5,
    moonPhase: 'full',
    moonElevation: 70,
    specialEvent: 'northern-lights'
  },
  {
    city: 'Cairo',
    country: 'Egypt',
    coordinates: { lat: 30.0444, lon: 31.2357 },
    timeOfDay: 'afternoon',
    season: 'summer',
    weather: 'sunny',
    temperature: 38,
    moonPhase: 'new',
    moonElevation: 10,
    specialEvent: 'desert-heat'
  },
  {
    city: 'Vancouver',
    country: 'Canada',
    coordinates: { lat: 49.2827, lon: -123.1207 },
    timeOfDay: 'morning',
    season: 'autumn',
    weather: 'misty',
    temperature: 12,
    moonPhase: 'waning-gibbous',
    moonElevation: 25,
    specialEvent: 'autumn-leaves'
  },
  {
    city: 'Rio de Janeiro',
    country: 'Brazil',
    coordinates: { lat: -22.9068, lon: -43.1729 },
    timeOfDay: 'evening',
    season: 'summer',
    weather: 'partly cloudy',
    temperature: 28,
    moonPhase: 'first-quarter',
    moonElevation: 60,
    specialEvent: 'carnival'
  }
]

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Weather Cards</h1>
        {citiesData.map((cityData, index) => (
          <WeatherCard key={index} data={cityData} />
        ))}
      </div>
    </div>
  )
}

export default App
