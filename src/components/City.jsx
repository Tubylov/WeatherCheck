import React from 'react';
import './City.css';
import WeatherSelection from './WeatherSelection.jsx'

import { connect } from "react-redux";
import setCityAction from '../actions/actionCity.jsx';
import setCityCheckAction from '../actions/actionCityCheck.jsx';

function City(props) {

    function cityCheck(event){
        let elem = event.target;
        return [
            props.setCityFunction(elem.closest('.City').firstChild.textContent),
            props.setCityCheckFunction(true)
        ]
    }

    return (
        <div className="City" onClick={cityCheck}>
            <h1 id="name_city">{props.nameCity}</h1>
            <p className="City__temp">{props.temp}&deg;</p>
            <div className="City__icon">
                <WeatherSelection name={props.weather} width='78px' height='78px'/>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch){
    return {
        setCityFunction: city => {
            dispatch(setCityAction(city))
        },
        setCityCheckFunction: cityCheck => {
            dispatch(setCityCheckAction(cityCheck))
        }
    }
}

export default connect(null, mapDispatchToProps)(City);