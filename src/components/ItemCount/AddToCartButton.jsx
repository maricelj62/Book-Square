import React from 'react';
import './itemCount.css';

const AddToCartButton = ({handleEvent}) => {
    return (
        <button className="addContainer__addBtn" onClick={handleEvent}>
            Add to cart
        </button>
    )
}

export default AddToCartButton
