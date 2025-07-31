const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_OPENWEATHER_BASE_URL;

// Generate fake weather data for fallback
const generateFakeWeatherData = (lat, lon) => {
  const now = new Date();
  const hour = now.getHours();
  
  // Generate temperature based on latitude and time
  const baseTemp = 25 - Math.abs(lat) / 3;
  const timeVariation = Math.sin((hour - 6) * Math.PI / 12) * 10;
  const temperature = baseTemp + timeVariation + (Math.random() - 0.5) * 5;
  
  // Weather conditions based on latitude
  const weatherConditions = [
    { main: 'Clear', description: 'clear sky' },
    { main: 'Clouds', description: 'few clouds' },
    { main: 'Clouds', description: 'scattered clouds' },
    { main: 'Rain', description: 'light rain' },
    { main: 'Rain', description: 'moderate rain' },
    { main: 'Snow', description: 'light snow' },
    { main: 'Thunderstorm', description: 'thunderstorm' }
  ];
  
  // Select weather based on latitude and randomness
  let weatherIndex = Math.floor(Math.random() * 4); // Default to first 4 options
  if (Math.abs(lat) > 60 && temperature < 5) {
    weatherIndex = 5; // Snow for cold high latitudes
  } else if (Math.abs(lat) < 30 && Math.random() > 0.8) {
    weatherIndex = 6; // Occasional thunderstorms in tropics
  }
  
  const weather = weatherConditions[weatherIndex];
  
  // Generate sunrise/sunset based on latitude and day of year
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  const sunriseBase = 6 + Math.sin((dayOfYear - 80) * Math.PI / 182.5) * 2;
  const sunsetBase = 18 - Math.sin((dayOfYear - 80) * Math.PI / 182.5) * 2;
  
  return {
    weather: [weather],
    main: {
      temp: temperature,
      feels_like: temperature - 2,
      temp_min: temperature - 3,
      temp_max: temperature + 3,
      pressure: 1013 + Math.random() * 20 - 10,
      humidity: 40 + Math.random() * 40
    },
    clouds: {
      all: weather.main === 'Clear' ? Math.random() * 20 : 
           weather.main === 'Clouds' ? 40 + Math.random() * 40 :
           70 + Math.random() * 30
    },
    sys: {
      sunrise: Math.floor(now.setHours(sunriseBase, 0, 0, 0) / 1000),
      sunset: Math.floor(now.setHours(sunsetBase, 0, 0, 0) / 1000)
    },
    timezone: Math.round(lon / 15) * 3600, // Rough timezone estimate
    dt: Math.floor(now.getTime() / 1000)
  };
};

export const fetchWeatherData = async (lat, lon) => {
  // Check if API key exists
  if (!API_KEY || API_KEY === 'your_api_key_here' || API_KEY === 'add your key') {
    console.log('No valid API key found, using fake weather data');
    return generateFakeWeatherData(lat, lon);
  }
  
  try {
    const response = await fetch(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    
    if (!response.ok) {
      throw new Error('Weather data fetch failed');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data, falling back to fake data:', error);
    return generateFakeWeatherData(lat, lon);
  }
};

export const fetchMultipleWeatherData = async (cities) => {
  const weatherPromises = cities.map(city => 
    fetchWeatherData(city.coordinates.lat, city.coordinates.lon)
  );
  
  const weatherData = await Promise.all(weatherPromises);
  
  return cities.map((city, index) => ({
    ...city,
    weatherData: weatherData[index]
  }));
};

// Helper functions to determine time of day, season, etc.
export const getTimeOfDay = (timezone, sunrise, sunset) => {
  const now = new Date();
  const localTime = new Date(now.getTime() + timezone * 1000);
  const hours = localTime.getUTCHours();
  
  const sunriseHour = new Date(sunrise * 1000).getUTCHours();
  const sunsetHour = new Date(sunset * 1000).getUTCHours();
  
  if (hours >= 5 && hours < 12) return 'morning';
  if (hours >= 12 && hours < 17) return 'afternoon';
  if (hours >= 17 && hours < 21) return 'evening';
  return 'night';
};

export const getSeason = (lat, month) => {
  const isNorthernHemisphere = lat >= 0;
  
  if (month >= 3 && month <= 5) {
    return isNorthernHemisphere ? 'spring' : 'autumn';
  } else if (month >= 6 && month <= 8) {
    return isNorthernHemisphere ? 'summer' : 'winter';
  } else if (month >= 9 && month <= 11) {
    return isNorthernHemisphere ? 'autumn' : 'spring';
  } else {
    return isNorthernHemisphere ? 'winter' : 'summer';
  }
};

export const getMoonPhase = () => {
  // Simple moon phase calculation based on current date
  const phases = [
    'new', 'waxing-crescent', 'first-quarter', 'waxing-gibbous',
    'full', 'waning-gibbous', 'third-quarter', 'waning-crescent'
  ];
  
  const now = new Date();
  const dayOfMonth = now.getDate();
  const phaseIndex = Math.floor((dayOfMonth / 30) * phases.length);
  
  return phases[phaseIndex % phases.length];
};

export const getSpecialEvent = (city, season, weather) => {
  // Determine special events based on city, season, and weather
  if (city === 'Tokyo' && season === 'spring') return 'cherry-blossom';
  if (city === 'Reykjavik' && (weather.includes('clear') || weather.includes('clouds')) && season === 'winter') return 'northern-lights';
  if ((city === 'Cairo' || city === 'Dubai') && season === 'summer') return 'desert-heat';
  if ((city === 'Vancouver' || city === 'Montreal') && season === 'autumn') return 'autumn-leaves';
  if (city === 'Rio de Janeiro' && season === 'summer') return 'carnival';
  
  return null;
};

// Detect weather conditions for visual effects
export const getWeatherCondition = (weatherData) => {
  const main = weatherData.weather[0].main.toLowerCase();
  const description = weatherData.weather[0].description.toLowerCase();
  
  if (main.includes('thunderstorm')) {
    return { type: 'storm', intensity: 'heavy' };
  }
  if (main.includes('rain') || main.includes('drizzle')) {
    const intensity = description.includes('heavy') ? 'heavy' : 
                     description.includes('light') ? 'light' : 'moderate';
    return { type: 'rain', intensity };
  }
  if (main.includes('snow')) {
    const intensity = description.includes('heavy') ? 'heavy' : 
                     description.includes('light') ? 'light' : 'moderate';
    return { type: 'snow', intensity };
  }
  
  return null;
};

// Calculate sun elevation based on time, latitude, and day of year
export const getSunElevation = (lat, lon, timezone) => {
  const now = new Date();
  const localTime = new Date(now.getTime() + timezone * 1000);
  const hours = localTime.getUTCHours();
  const minutes = localTime.getUTCMinutes();
  
  // Simplified calculation - in reality this would be more complex
  const timeDecimal = hours + minutes / 60;
  
  // Approximate sun elevation based on time of day
  let elevation = 0;
  if (timeDecimal >= 6 && timeDecimal <= 18) {
    // Daytime - sun rises from 6 to noon, sets from noon to 18
    const dayProgress = (timeDecimal - 6) / 12;
    elevation = Math.sin(dayProgress * Math.PI) * 90;
    
    // Adjust for latitude (higher latitudes = lower sun)
    const latAdjustment = Math.abs(lat) / 90;
    elevation = elevation * (1 - latAdjustment * 0.5);
  }
  
  return Math.max(0, Math.min(90, elevation));
};

// Determine if sun is visible based on weather and time
export const isSunVisible = (weatherData, timeOfDay) => {
  const clouds = weatherData.clouds.all; // Cloud coverage percentage
  const weather = weatherData.weather[0].main.toLowerCase();
  
  // Sun not visible at night
  if (timeOfDay === 'night') return false;
  
  // Sun not visible during storms or heavy precipitation
  if (weather.includes('thunderstorm') || weather.includes('rain') || weather.includes('snow')) {
    return false;
  }
  
  // Partially visible with clouds
  return clouds < 80;
};
