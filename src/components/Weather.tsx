// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { motion } from 'framer-motion';
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import { LeafletMouseEvent } from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import '../styles/weather.css'

// // Fix for default marker icon in Leaflet
// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
// });

// const WeatherContainer = styled(motion.div)`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 2rem;
// `;

// const Title = styled.h1`
//   color: #2c5530;
//   margin-bottom: 2rem;
//   text-align: center;
// `;

// const MapWeatherContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 2rem;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const MapWrapper = styled.div`
//   height: 500px;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const WeatherInfo = styled.div`
//   background: white;
//   padding: 2rem;
//   border-radius: 8px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const WeatherHeader = styled.div`
//   text-align: center;
//   margin-bottom: 2rem;
// `;

// const Temperature = styled.h2`
//   font-size: 3rem;
//   margin: 0;
//   color: #2c5530;
// `;

// const WeatherDescription = styled.p`
//   font-size: 1.2rem;
//   color: #666;
//   margin: 0.5rem 0;
// `;

// const WeatherDetails = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 1rem;
//   margin-top: 2rem;
// `;

// const DetailItem = styled.div`
//   text-align: center;
//   padding: 1rem;
//   background: #f5f5f5;
//   border-radius: 4px;
// `;

// interface WeatherData {
//   temperature: number;
//   description: string;
//   humidity: number;
//   windSpeed: number;
//   location: string;
//   icon: string;
// }

// const getWeatherDescriptionAndIcon = (code: number) => {
//   const weatherConditions: { [key: number]: { description: string; icon: string } } = {
//     0: { description: "Clear Sky", icon: "☀️" },
//     1: { description: "Mainly Clear", icon: "🌤️" },
//     2: { description: "Partly Cloudy", icon: "⛅" },
//     3: { description: "Overcast", icon: "☁️" },
//     45: { description: "Fog", icon: "🌫️" },
//     48: { description: "Depositing Rime Fog", icon: "🌫️" },
//     51: { description: "Drizzle (Light)", icon: "🌦️" },
//     61: { description: "Rain (Slight)", icon: "🌧️" },
//     95: { description: "Thunderstorm", icon: "⛈️" },
//     99: { description: "Severe Thunderstorm", icon: "🌩️" },
//   };
//   return weatherConditions[code] || { description: "Unknown", icon: "❓" };
// };

// const LocationMarker: React.FC<{ setPosition: (pos: [number, number]) => void; }> = ({ setPosition }) => {
//   const map = useMapEvents({
//     click(e: LeafletMouseEvent) {
//       setPosition([e.latlng.lat, e.latlng.lng]);
//       map.flyTo(e.latlng, map.getZoom());
//     },
//   });
//   return null;
// };

// const Weather: React.FC = () => {
//   const [position, setPosition] = useState<[number, number]>([20.5937, 78.9629]);
//   const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       try {
//         const weatherResponse = await fetch(
//           `https://api.open-meteo.com/v1/forecast?latitude=${position[0]}&longitude=${position[1]}&current_weather=true&weathercode=true`
//         );
//         const weatherData = await weatherResponse.json();

//         const locationResponse = await fetch(
//           `https://nominatim.openstreetmap.org/reverse?lat=${position[0]}&lon=${position[1]}&format=json`
//         );
//         const locationData = await locationResponse.json();

//         if (weatherData.current_weather && locationData.display_name) {
//           const { description, icon } = getWeatherDescriptionAndIcon(weatherData.current_weather.weathercode);
//           const weather: WeatherData = {
//             temperature: weatherData.current_weather.temperature,
//             description,
//             humidity: 50,
//             windSpeed: weatherData.current_weather.windspeed,
//             location: locationData.display_name,
//             icon,
//           };
//           setWeatherData(weather);
//         } else {
//           setWeatherData(null);
//         }
//       } catch (error) {
//         console.error("Error fetching weather data:", error);
//         setWeatherData(null);
//       }
//     };

//     fetchWeatherData();
//   }, [position]);

//   return (
//     <WeatherContainer>
//       <Title>Weather Map</Title>
//       <MapWeatherContainer>
//         <MapWrapper>
//           <MapContainer center={position} zoom={5} style={{ height: '100%', width: '100%' }}>
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; OpenStreetMap contributors' />
//             <Marker position={position} />
//             <LocationMarker setPosition={setPosition} />
//           </MapContainer>
//         </MapWrapper>

//         {weatherData && (
//           <WeatherInfo>
//             <WeatherHeader>
//               <Temperature>{weatherData.icon} {weatherData.temperature}°C</Temperature>
//               <WeatherDescription>{weatherData.description}</WeatherDescription>
//               <WeatherDescription>{weatherData.location}</WeatherDescription>
//             </WeatherHeader>
//             <WeatherDetails>
//               <DetailItem>
//                 <h4>Humidity</h4>
//                 <p>{weatherData.humidity}%</p>
//               </DetailItem>
//               <DetailItem>
//                 <h4>Wind Speed</h4>
//                 <p>{weatherData.windSpeed} km/h</p>
//               </DetailItem>
//             </WeatherDetails>
//           </WeatherInfo>
//         )}
//       </MapWeatherContainer>
//     </WeatherContainer>
//   );
// };

// export default Weather;
































// Weather.tsx
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../styles/weather.css';

// Fix for default marker icon in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  location: string;
  icon: string;
}

const getWeatherDescriptionAndIcon = (code: number) => {
  const weatherConditions: { [key: number]: { description: string; icon: string } } = {
    0: { description: "Clear Sky", icon: "☀️" },
    1: { description: "Mainly Clear", icon: "🌤️" },
    2: { description: "Partly Cloudy", icon: "⛅" },
    3: { description: "Overcast", icon: "☁️" },
    45: { description: "Fog", icon: "🌫️" },
    48: { description: "Depositing Rime Fog", icon: "🌫️" },
    51: { description: "Drizzle (Light)", icon: "🌦️" },
    61: { description: "Rain (Slight)", icon: "🌧️" },
    95: { description: "Thunderstorm", icon: "⛈️" },
    99: { description: "Severe Thunderstorm", icon: "🌩️" },
  };
  return weatherConditions[code] || { description: "Unknown", icon: "❓" };
};

const LocationMarker: React.FC<{ setPosition: (pos: [number, number]) => void; }> = ({ setPosition }) => {
  const map = useMapEvents({
    click(e: LeafletMouseEvent) {
      setPosition([e.latlng.lat, e.latlng.lng]);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  return null;
};

const Weather: React.FC = () => {
  const [position, setPosition] = useState<[number, number]>([20.5937, 78.9629]);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const weatherResponse = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${position[0]}&longitude=${position[1]}&current_weather=true&weathercode=true`
        );
        const weatherData = await weatherResponse.json();

        const locationResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${position[0]}&lon=${position[1]}&format=json`
        );
        const locationData = await locationResponse.json();

        if (weatherData.current_weather && locationData.display_name) {
          const { description, icon } = getWeatherDescriptionAndIcon(weatherData.current_weather.weathercode);
          const weather: WeatherData = {
            temperature: weatherData.current_weather.temperature,
            description,
            humidity: 50,
            windSpeed: weatherData.current_weather.windspeed,
            location: locationData.display_name,
            icon,
          };
          setWeatherData(weather);
        } else {
          setWeatherData(null);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeatherData(null);
      }
    };

    fetchWeatherData();
  }, [position]);

  return (
    <div className="WeatherContainer">
      <h1 className="Title">Weather Map</h1>
      <div className="MapWeatherContainer">
        <div className="MapWrapper">
          <MapContainer center={position} zoom={5} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; OpenStreetMap contributors' />
            <Marker position={position} />
            <LocationMarker setPosition={setPosition} />
          </MapContainer>
        </div>

        {weatherData && (
          <div className="WeatherInfo">
            <div className="WeatherHeader">
              <h2 className="Temperature">{weatherData.icon} {weatherData.temperature}°C</h2>
              <p className="WeatherDescription">{weatherData.description}</p>
              <p className="WeatherDescription">{weatherData.location}</p>
            </div>
            <div className="WeatherDetails">
              <div className="DetailItem">
                <h4>Humidity</h4>
                <p>{weatherData.humidity}%</p>
              </div>
              <div className="DetailItem">
                <h4>Wind Speed</h4>
                <p>{weatherData.windSpeed} km/h</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;