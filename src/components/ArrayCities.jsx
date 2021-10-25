import React from 'react';
import { useState, useEffect } from 'react';
import './ArrayCities.css';
import City from './City.jsx';



function ArrayCities() {

    const [temp, setTemp] = useState([]);
    const [icon, setIcon] = useState([]);

    let array_id = [];

    for(let i = 0; i < localStorage.length; i++){
        array_id.push(localStorage.key(i));
        
    }

    let id_list = array_id.toString();

    let listCity = [];
    for(let i = 0; i < localStorage.length; i++){
        listCity.push(<City nameCity={localStorage.getItem(array_id[i])} temp={temp[i]} weather={icon[i]} key={i}/>)
    }

    useEffect(() => {
        const api = "https://api.openweathermap.org/data/2.5/group?id=" + id_list + "&units=metric&lang=ru&appid=a5b4c7d6e0c8f256bd5319bfbf24b31d"
        fetch(api)
            .then(res => res.json())
            .then(data => {
                console.log("Данные загружены!", data.list)
                let arr_temp = [];
                let arr_icon = [];
                for(let i in data.list){
                    let temperature = Math.round(data.list[i].main.temp)
                    arr_temp.push((temperature >= 0) ? "+" + temperature: temperature)
                    arr_icon.push(data.list[i].weather[0].main)
                }
                setTemp(arr_temp)
                setIcon(arr_icon)
            }).catch(function(error){
                console.log("Error!!!");
                console.log(error);
            })
    }, [])

    return (
        <div className="ArrayCities">
            {listCity}
        </div>
    );
}

export default ArrayCities;