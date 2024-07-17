function ProductCard({ product, onAddToCart }) {
    return (
      <div className='max-w-sm rounded overflow-hidden shadow-lg bg-green-700 m-4'>
        <img src={product.images[0]} alt={product.title} className='w-full h-48 object-cover'/>
        <div className='px-6 py-4'>
          <h2 className='font-bold text-xl text-lime-400 mb-2'>{product.title}</h2>
          <p className='text-black text-base'>{product.description}</p>
          <p className='text-green-500 text-lg font-semibold'>${product.price}</p>
          <button
            className="bg-lime-400 text-green-700 font-bold py-2 px-4 rounded-full hover:bg-lime-600 transition duration-300 ease-in-out"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
  
  export default ProductCard;
  
