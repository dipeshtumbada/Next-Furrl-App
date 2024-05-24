"use client"

import React, { useState, useEffect } from 'react';
import { fetchProductData } from '@/utils/api';
import ProductDetailIcon from '@/app/components/ProductDetailIcon';

interface Product {
  id: string;
  title: string;
  images: { src: string }[];
  vendor: string;
  price: { value: number, currency: string };
  MRP: { value: number, currency: string };
  discountPercent: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setLoading(true);
        const productData = await fetchProductData(page);
        setProducts(productData.products);
        setTotalPages(productData.totalPages);
      } catch (error) {
        console.error('Error loading initial products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
        fetchNextPage();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page, totalPages]);

  const fetchNextPage = async () => {
    if (loading || page >= totalPages) return;

    const nextPage = page + 1;
    try {
      setLoading(true);
      const nextPageData = await fetchProductData(nextPage);
      setProducts(prevProducts => [...prevProducts, ...nextPageData.products]);
      setPage(nextPage);
    } catch (error) {
      console.error('Error loading next page:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <ul className="grid grid-cols-2 gap-4">
        {products.map(product => (
          <li key={product.id} className="border p-1 rounded-lg bg-white shadow">
            <div className="relative mb-4">
              {product.images.length > 0 && (
                <img
                  src={product.images[0].src}
                  alt={`Product`}
                  className="w-full h-34 object-cover rounded-lg"
                />
              )}
              <ProductDetailIcon productId={product.id} />
            </div>
            <div className="text-center mb-2">
              <h6 className="text-sm text-gray-600">{product.vendor}</h6>
              <p className="text-sm text-gray-600 truncate">{product.title}</p>
            </div>
            <div className="text-center flex justify-center items-center space-x-2">
              <span className="text-xs font-medium">{product.price.currency} {product.price.value}</span>
              <span className="text-xs text-gray-400 line-through">{product.MRP.currency} {product.MRP.value}</span>
              <span className="text-xs text-green-600">{product.discountPercent}% off</span>
            </div>
          </li>
        ))}
      </ul>
      {loading && <p className="text-center mt-4">Loading...</p>}
    </div>
  );
};

export default ProductList;
