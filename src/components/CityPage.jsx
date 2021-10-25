import React from 'react';
import { useState, useEffect } from 'react';
import './CityPage.css';
import Icons from './Icons.jsx';
import WeatherSelection from './WeatherSelection.jsx'

import { connect } from "react-redux";
import setCityCheckAction from '../actions/actionCityCheck.jsx';

function CityPage(props) {

    const [city_id, setCityId] = useState("");
    const [city_name, setCityName] = useState("");
    const [description, setDescription] = useState("");
    const [temp, setTemp] = useState("");
    const [icon, setIcon] = useState("");
    const [pressure, setPressure] = useState("");
    const [sunset, setSunset] = useState("");
    const [favourite, setFavourite] = useState(false);

    function cityOut(event){
        return props.setCityCheckFunction(false)
    }

    function citySave(){
        if(favourite){
            localStorage.removeItem(city_id);
            setFavourite(false)
        }else{
            localStorage.setItem(city_id, city_name);
            setFavourite(true)
        }
    }

    useEffect(() => {
        const api = "https://api.openweathermap.org/data/2.5/weather?q=" + props.nameCity + "&lang=ru&units=metric&appid=a5b4c7d6e0c8f256bd5319bfbf24b31d"
        fetch(api)
            .then(res => res.json())
            .then(data => {
                console.log("Данные загружены!", data)
                let temperature = Math.round(data.main.temp)
                let time = new Date(data.sys.sunset)
                let current_time = (time.getUTCHours() + time.getTimezoneOffset() / 60).toString().padStart(2,'0') + ":" + time.getMinutes().toString().padStart(2,'0');
                
                setCityId(data.id)
                setCityName(data.name)
                setDescription(data.weather[0].description)
                setTemp((temperature >= 0) ? "+" + temperature: temperature)
                setIcon(data.weather[0].main)
                setPressure(data.main.pressure)
                setSunset(current_time)

                for(let i = 0; i < localStorage.length; i++){
                    let key = localStorage.key(i);
                    if(key == data.id){
                        setFavourite(true)
                    }
                }
            }).catch(function(error){
                console.log("Error!!!");
                console.log(error);
            });
    }, [])
    
    return (
        <section className="CityPage">
            <div className="CityPage__controls">
                <div className="CityPage__controls__back" onClick={cityOut}>
                    <Icons name="angleArrow"/>
                    <p>Назад</p>
                </div>
                <div className="CityPage__controls__favourite" onClick={citySave}>
                    {favourite ? <Icons name="FavouritesFill"/> : <Icons name="FavouritesNoFill"/>}
                </div>
            </div>
            <h1 className="CityPage__head">{city_name}</h1>
            <p className="CityPage__meteorological-values">{description}</p>
            <div className="CityPage__weather">
                <p className="CityPage__weather__temperature">{temp}&deg;</p>
                <div className="CityPage__weather__icon">
                    <WeatherSelection name={icon} width='78px' height='78px'/>
                </div>
            </div>
            <div className="CityPage__pressure">
                <div>
                    <Icons name="Barometer"/>
                </div>
                <p>{pressure} мм рт.ст.</p>
            </div>
            <p className="CityPage__sunset">Закат в {sunset}</p>
        </section>
    );
}

function mapDispatchToProps(dispatch){
    return {
        setCityCheckFunction: cityCheck => {
            dispatch(setCityCheckAction(cityCheck))
        }
    }
}

export default connect(null, mapDispatchToProps)(CityPage);