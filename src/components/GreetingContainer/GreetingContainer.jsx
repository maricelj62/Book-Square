import React from 'react';
import './greetingContainer.css';

const GreetingContainer = ({greeting}) => {
    return (
        <div className="greetingContainer">
            <h1 className="greetingContainer__title">{greeting}</h1>
        </div>
    )
}

export default GreetingContainer
