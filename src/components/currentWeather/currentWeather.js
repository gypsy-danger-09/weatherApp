import './currentWeather.css'

const CurrentWeather = (data) => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{data.data.city}</p>
                    <p className='weather-description'>{data.data.weather[0].description}</p>
                </div>               
                    <img alt='weather' className='weather-icon' src='' />
            </div>
            <div className='bottom'>
                <p className='temperature'>{data.data.main.temp} F</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels Like</span>
                        <span className='parameter-value'>{data.data.main.feels_like}</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{data.data.wind.speed}</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{data.data.main.humidity}</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{data.data.main.pressure}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather