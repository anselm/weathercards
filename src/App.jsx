import { useState, useEffect } from 'react'
import WeatherCard from './components/WeatherCard'
import { 
  fetchMultipleWeatherData, 
  getTimeOfDay, 
  getSeason, 
  getMoonPhase, 
  getSpecialEvent 
} from './services/weatherService'

// Real cities with actual coordinates
const cities = [
  { city: 'Tokyo', country: 'Japan', coordinates: { lat: 35.6762, lon: 139.6503 } },
  { city: 'Reykjavik', country: 'Iceland', coordinates: { lat: 64.1466, lon: -21.9426 } },
  { city: 'Cairo', country: 'Egypt', coordinates: { lat: 30.0444, lon: 31.2357 } },
  { city: 'Vancouver', country: 'Canada', coordinates: { lat: 49.2827, lon: -123.1207 } },
  { city: 'Rio de Janeiro', country: 'Brazil', coordinates: { lat: -22.9068, lon: -43.1729 } },
  { city: 'Sydney', country: 'Australia', coordinates: { lat: -33.8688, lon: 151.2093 } },
  { city: 'Mumbai', country: 'India', coordinates: { lat: 19.0760, lon: 72.8777 } },
  { city: 'London', country: 'United Kingdom', coordinates: { lat: 51.5074, lon: -0.1278 } },
  { city: 'New York', country: 'USA', coordinates: { lat: 40.7128, lon: -74.0060 } },
  { city: 'Dubai', country: 'UAE', coordinates: { lat: 25.2048, lon: 55.2708 } },
  { city: 'Singapore', country: 'Singapore', coordinates: { lat: 1.3521, lon: 103.8198 } },
  { city: 'Paris', country: 'France', coordinates: { lat: 48.8566, lon: 2.3522 } },
  { city: 'Moscow', country: 'Russia', coordinates: { lat: 55.7558, lon: 37.6173 } },
  { city: 'Buenos Aires', country: 'Argentina', coordinates: { lat: -34.6037, lon: -58.3816 } },
  { city: 'Cape Town', country: 'South Africa', coordinates: { lat: -33.9249, lon: 18.4241 } },
  { city: 'Bangkok', country: 'Thailand', coordinates: { lat: 13.7563, lon: 100.5018 } },
  { city: 'Stockholm', country: 'Sweden', coordinates: { lat: 59.3293, lon: 18.0686 } },
  { city: 'Montreal', country: 'Canada', coordinates: { lat: 45.5017, lon: -73.5673 } },
  { city: 'Seoul', country: 'South Korea', coordinates: { lat: 37.5665, lon: 126.9780 } },
  { city: 'Mexico City', country: 'Mexico', coordinates: { lat: 19.4326, lon: -99.1332 } }
];

function App() {
  const [citiesData, setCitiesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadWeatherData = async () => {
      try {
        setLoading(true);
        const citiesWithWeather = await fetchMultipleWeatherData(cities);
        
        // Process the weather data to add our custom fields
        const processedData = citiesWithWeather.map(city => {
          if (!city.weatherData) return null;
          
          const { weatherData } = city;
          const currentMonth = new Date().getMonth() + 1;
          
          return {
            ...city,
            timeOfDay: getTimeOfDay(weatherData.timezone, weatherData.sys.sunrise, weatherData.sys.sunset),
            season: getSeason(city.coordinates.lat, currentMonth),
            weather: weatherData.weather[0].description,
            temperature: Math.round(weatherData.main.temp),
            moonPhase: getMoonPhase(),
            moonElevation: Math.floor(Math.random() * 80) + 10, // Still random for now
            specialEvent: getSpecialEvent(city.city, getSeason(city.coordinates.lat, currentMonth), weatherData.weather[0].main)
          };
        }).filter(Boolean); // Remove any null entries
        
        setCitiesData(processedData);
      } catch (err) {
        setError('Failed to load weather data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadWeatherData();
    
    // Refresh weather data every 10 minutes
    const interval = setInterval(loadWeatherData, 10 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading weather data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-2xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 space-y-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Live Weather Cards</h1>
          <p className="text-gray-600 mt-2">Real-time weather data from around the world</p>
        </div>
        {citiesData.map((cityData, index) => (
          <WeatherCard key={index} data={cityData} />
        ))}
      </div>
    </div>
  )
}

export default App
