// ProductDetailIcon.tsx

import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

interface ProductDetailIconProps {
  productId: string;
}

const ProductDetailIcon: React.FC<ProductDetailIconProps> = ({ productId }) => {
  const handleClick = () => {
    window.location.href = `/productDetail/${productId}`;
  };

  return (
    <div
      className="absolute top-2 right-2 bg-white rounded-full p-1 cursor-pointer shadow-md"
      onClick={handleClick}
    >
      <AiOutlineInfoCircle size={24} color="#000" />
    </div>
  );
};

export default ProductDetailIcon;
