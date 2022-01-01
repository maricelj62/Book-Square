import React from 'react';
import { Link } from 'react-router-dom';
import './endPurchaseButton.css';

const EndPurchaseButton = () => {
    return (
        <Link to='/cart'>
            <button className="endPurchaseContainer__endBtn">Terminar compra</button>
        </Link>
    )
}

export default EndPurchaseButton
