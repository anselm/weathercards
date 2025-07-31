import WeatherCard from './components/WeatherCard'

// Fake data for Tokyo during cherry blossom season
const tokyoData = {
  city: 'Tokyo',
  country: 'Japan',
  coordinates: { lat: 35.6762, lon: 139.6503 },
  timeOfDay: 'evening', // morning, afternoon, evening, night
  season: 'spring',
  weather: 'clear',
  temperature: 18,
  moonPhase: 'waxing-crescent', // new, waxing-crescent, first-quarter, waxing-gibbous, full, waning-gibbous, third-quarter, waning-crescent
  moonElevation: 45, // degrees above horizon (0-90)
  specialEvent: 'cherry-blossom' // cherry-blossom, autumn-leaves, snow, etc.
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <WeatherCard data={tokyoData} />
    </div>
  )
}

export default App
