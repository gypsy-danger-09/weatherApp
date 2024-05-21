import { useState } from 'react';
import './App.css';
import { weatherAPI } from './components/api';
import CurrentWeather from './components/currentWeather/currentWeather';
import Search from './components/search/search';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null)

  const handleOnSearchChange = (searchData) => {
      const [lat,lon] = searchData.value.split(' ')

      const currentWeatherFetch = fetch(`${weatherAPI}/weather?lat=${lat}&lon=${lon}&appid=a07b548434493281193b036edddb5034`)

      Promise.all([currentWeatherFetch])
      .then(async (response) =>{
        const weatherResponse = await response[0].json()
      
        setCurrentWeather({city:searchData.label, ...weatherResponse})
      })
      .catch((error) =>{
        console.error(error)
      })
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather}/>}
    </div>
  );
}

export default App;
