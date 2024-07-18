import { useEffect, useState } from "react";



function Cart() {

  const [product, setProduct] = useState(null);

useEffect(() => {
  const product = JSON.parse(localStorage.getItem(product));
  setProduct(product)
}, [])

  return (
    <div>
      
    </div>
  )
}

export default Cart;
