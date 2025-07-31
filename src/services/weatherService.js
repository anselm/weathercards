const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_OPENWEATHER_BASE_URL;

export const fetchWeatherData = async (lat, lon) => {
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
    console.error('Error fetching weather data:', error);
    return null;
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
