import React from 'react';
import './itemCount.css';

const AddToCartButton = ({handleEvent}) => {
    return (
        <button className="itemCountContainer__addBtn" onClick={handleEvent}>
            Agregar al carrito
        </button>
    )
}

export default AddToCartButton
