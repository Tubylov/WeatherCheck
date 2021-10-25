import React from 'react';
import Clear from '../weatherComponents/Clear';
import Clouds from '../weatherComponents/Clouds';
import Drizzle from '../weatherComponents/Drizzle';
import Dust_Sand_Ash from '../weatherComponents/Dust_Sand_Ash';
import Mist_Smoke_Haze_Fog from '../weatherComponents/Mist_Smoke_Haze_Fog';
import Rain from '../weatherComponents/Rain';
import Snow from '../weatherComponents/Snow';
import Squall from '../weatherComponents/Squall';
import Thunderstorm from '../weatherComponents/Thunderstorm';
import Tornado from '../weatherComponents/Tornado';

function WeatherSelection({name, width, height}) {
    
    switch(name){
        case 'Clear':
            return <Clear width={width} height={height} />
        case 'Clouds':
            return <Clouds width={width} height={height}/>
        case 'Drizzle':
            return <Drizzle width={width} height={height}/>
        case 'Dust' || 'Sand' || 'Ash':
            return <Dust_Sand_Ash width={width} height={height}/>
        case 'Mist' || 'Smoke' || 'Haze' || 'Fog':
            return <Mist_Smoke_Haze_Fog  width={width} height={height}/>
        case 'Rain':
            return <Rain width={width} height={height} />
        case 'Snow':
            return <Snow width={width} height={height} />
        case 'Squall':
            return <Squall width={width} height={height} />
        case 'Thunderstorm':
            return <Thunderstorm width={width} height={height} />
        case 'Tornado':
            return <Tornado width={width} height={height} />
        default:
            return null
    }
}

export default WeatherSelection;