import React from 'react';
import Form from './Form.jsx';
import Help from './Help.jsx';
import ArrayCities from './ArrayCities.jsx';
import './Main.css';

function Main() {
    return (
        <main>
            <Form />
            { localStorage.length == 0 ? <Help /> : <ArrayCities /> }
        </main>
    );
}

export default Main;