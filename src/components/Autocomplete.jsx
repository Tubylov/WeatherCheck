import React from 'react';
import './Autocomplete.css';

import { connect } from "react-redux";
import setCityAction from '../actions/actionCity.jsx';
import setCityCheckAction from '../actions/actionCityCheck.jsx';

function Autocomplete(props) {

    const listItems = props.arr.map(( city, index ) => 
        <div key={index.toString()} className="Autocomplete__item" onClick={cityCheck}>
            {city}
            <div key={index.toString()} className="Autocomplete__item__text">
                {props.text[0].toUpperCase() + props.text.slice(1).toLowerCase()}
            </div>
        </div>
    );

    function cityCheck(event){
        let elem = event.target;
        console.log(elem.parentNode.firstChild.textContent);
        return [
            props.setCityFunction(elem.parentNode.firstChild.textContent),
            props.setCityCheckFunction(true)
        ]
    }

    return (
        <div className="Autocomplete">
            { listItems }
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

export default connect(null, mapDispatchToProps)(Autocomplete);