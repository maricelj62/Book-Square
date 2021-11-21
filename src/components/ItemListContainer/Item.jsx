import React from 'react'
import './item.css';

const Item = ({name, image, price}) => {
    return (
        <article className="itemContainer">
          <div className="itemContainer__imageContainer">
            <img className="imageContainer__image" src={image} alt="" />
          </div>
          <div className="itemContainer__textContainer">
            <h2 className="textContainer__title">{name}</h2>
            <p className="textContainer__parr">USD {price}</p>
          </div>
        </article>
    )
}

export default Item
