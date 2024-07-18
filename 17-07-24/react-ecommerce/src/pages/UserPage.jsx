import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserPage() {

    const {id} = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then(res => res.json())
      .then(products => setProduct(products));
    }, []);
    

  return (
    <div>
      {product && product.title}
    </div>
  )
}

export default UserPage;
