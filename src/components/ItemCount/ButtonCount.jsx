import React from 'react';
import AddToCartButton from './AddToCartButton';

const ButtonCount = ({addToCart}) => {

    const handleEvent = () => {
        addToCart();
    }

    return (
        <div>
            <AddToCartButton handleEvent={handleEvent}/>
        </div>
    )
}

export default ButtonCount
