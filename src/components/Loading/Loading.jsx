import React from 'react';
import './loading.css';

const Loading = ({text}) => {
    return (
        <div className="loadingContainer">
            <h2>{text}</h2>
        </div>
    )
}

export default Loading
