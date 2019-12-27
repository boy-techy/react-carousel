import React from 'react';

const ProductCard = React.memo(({ detail }) => {
    return (
      <div className="card-container">
          <img src={detail.img} alt={detail.name}/>
          <div className="content">
              <span>{detail.name}</span>
              <span>&#x20B9;{detail.price}</span>
          </div>
      </div>
    )
});

export default ProductCard;
