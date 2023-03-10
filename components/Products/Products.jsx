import React from 'react';
import { useProudcts } from '../../contexts/ProductProvider/ProductProvider';
import ProductCard from '../ProuductCard/ProductCard';

const Products = ({ filteredData }) => {
  console.log(filteredData);
  //   const data = useProudcts();
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {filteredData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
