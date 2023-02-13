import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter();
  const [product, setProduct] = useState<TProduct>();

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/avo/${productId}`);
      const data = await response.json();
      setProduct(data);
    })();
  }, [productId]);

  return (
    <div>
      <h1>Product Page = {product?.name}</h1>
    </div>
  );
};

export default ProductItem;
