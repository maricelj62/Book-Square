import React from 'react';
import { useState } from 'react';
import AddToCartButton from './AddToCartButton';
import EndPurchaseButton from './EndPurchaseButton';

const ButtonCount = ({addToCart}) => {

    const [inputType, setInputType] = useState('add');

    const handleEvent = () => {
        setInputType('end');
        addToCart();
    }

    return (
        <div>
            {inputType === 'add' ?
                <AddToCartButton handleEvent={handleEvent}/>
                :
                <EndPurchaseButton />
            }
        </div>
    )
}

export default ButtonCount
