import React from 'react';
import Icons from './Icons.jsx';
import './Help.css';

function Help() {
    return (
        <div className="Help">
            <div className="Help__Arrow"><Icons name="Arrow"/></div>
            <p className="Help__hint-1">Начните вводить город, например, <span>Ижевск</span></p>
            <p className="Help__hint-2">Используйте значок <q>закладки</q>, чтобы закрепить город на главной</p>
            <div className="Help__Favourites"><Icons name="Favourites"/></div>
        </div>
    );
}

export default Help;