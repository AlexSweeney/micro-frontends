import React, { useState, useEffect } from 'react';
import { getProducts, currency } from './products';

export default function HomeContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, [])

  useEffect(() => {
    console.log('products', products)
  }, [products])

  return (
    <div className='my-10 grid grid-cols-4 gap-5'>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <img src={product.image} alt={product.name} width={100} /> 
        </div>
      ))}
    </div>
  )
}

