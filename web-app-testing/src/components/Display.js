import React from 'react';
import Dashboard from './Dashboard';

const Display = ({ props }) => {
    return (
        <div className='display-container'>
            <h2>At Bat:</h2>
            <div className='display-counts'>
                <h3>Strikes: {props.strike}</h3>
                <h3>Balls: {props.ball}</h3>
                <h3>Fouls: {props.foul}</h3>
                <h3>Hits: {props.hit}</h3>
            </div>
        </div>
    );
}

export default Display;