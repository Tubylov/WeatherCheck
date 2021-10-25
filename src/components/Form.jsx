import React from 'react';
import { useState } from 'react';
import './Form.css';
import cities from '../cities.json';
import Autocomplete from './Autocomplete.jsx';

const city_list = [];

for(let i in cities.city){
    city_list[i] = cities.city[i].name;
}

function Form() {

    const [user_text, setUserText] = useState("");
    const [cities, setValue] = useState([]);
    const [hint, setHint] = useState(false);

    function getHint(e){
        let text = e.target.value;
        if(text.length >= 3){
            setHint(true);
            let cities_found = city_list.filter(item => item.toUpperCase().startsWith(text.toUpperCase()));
            setUserText(text);
            setValue(cities_found);
        }else{
            setHint(false);
        }
    }

    return (
        <div className="Form">
            <input onInput={getHint} type="text" placeholder="Укажите город" />
            { hint == true ? <Autocomplete text={user_text} arr={cities} /> : null }
        </div>
    );
}

export default Form;