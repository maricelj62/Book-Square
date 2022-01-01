import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ({id, image, name, author, price}) => {

    return (
        <article className="itemContainer">
          <div className="itemContainer__imageContainer">
            <Link to={`/detail/${id}`}>
              <img className="imageContainer__image" src={image} alt="" />
            </Link>
          </div>
          <div className="itemContainer__textContainer">
            <div className="textContainer__description">
              <h2 className="description__title">{name}</h2>
              <p className="description__parr">{author}</p>
            </div>
            <p className="textContainer__price">USD ${price}</p>
          </div>
        </article>
    )
}

export default Item
