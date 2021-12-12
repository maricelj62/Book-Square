import React from 'react';
import { Link } from 'react-router-dom';
import './itemCount.css';

const EndPurchaseButton = () => {
    return (
        <Link to='/cart'>
            <button className="addContainer__endBtn">Complete purchase</button>
        </Link>
    )
}

export default EndPurchaseButton
