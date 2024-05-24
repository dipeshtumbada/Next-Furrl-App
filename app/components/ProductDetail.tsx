// ProductDetail.tsx

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchProductById } from '@/utils/api';

interface ProductDetailProps {
  productId: string;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const [product, setProduct] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const loadProductData = async () => {
      try {
        const productData = await fetchProductById(productId);
        setProduct(productData);
      } catch (error) {
        console.error('Error loading product details:', error);
      }
    };

    loadProductData();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      {/* Render product details */}
    </div>
  );
};

export default ProductDetail;
