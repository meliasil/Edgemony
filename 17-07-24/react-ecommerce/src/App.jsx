import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(products => setProducts(products));
  }, []);

  useEffect(() => {
    if (!products.length) return;
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <div className='flex flex-wrap bg-lime-100 p-4'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>

      {selectedProduct && (
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-green-700 m-4 p-4'>
          <h2 className='font-bold text-xl text-lime-400 mb-2'>{selectedProduct.title}</h2>
          <p className='text-black text-base'>Aggiunto al carrello!</p>
        </div>
      )}
    </>
  )
}

export default App;