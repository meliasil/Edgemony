import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  /* const [selectedProduct, setSelectedProduct] = useState([]); */

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(products => setProducts(products));
  }, []);

  /* useEffect(() => {
    if (!products.length) return;
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]); */



  return (
    <>
      <div className='flex flex-wrap bg-lime-100 p-4'>
        {products.map(product => (
          <Link key={product.id}to={`products/${product.id}`} className='font-bold'><ProductCard key={product.id} product={product} /></Link>
        ))}
      </div>

      
    </>
  )
}

export default App;