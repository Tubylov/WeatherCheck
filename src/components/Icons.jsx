import React from 'react';
import IconsSVG from './Icons.svg';

function Icons({name, width, height}) {
    return (
        <svg>
            <use href={`${IconsSVG}#${name}`} width={width} height={height}></use>
        </svg>
    );
}

export default Icons;