import React from 'react';

const ProductCard = ({ product }) => {
  const { price, type, img, state, city, Name } = product;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Name}</h2>
        <div className="font-semibold space-y-2">
          <p>
            City: {city} | State: {state}
          </p>
          <p>type: {type}$</p>
          <p>Price: {price}$</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
