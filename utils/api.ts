interface Product {
  id: string;
  title: string;
  images: { src: string }[];
  vendor: string;
  price: { value: number, currency: string };
  MRP: { value: number, currency: string };
  discountPercent: number;
}

export async function fetchProductData(page: number): Promise<{ products: Product[]; totalPages: number }> {
  try {
    const response = await fetch('https://api.furrl.in/api/v2/listing/getListingProducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: {
          page: page,
          pageSize: 10,
          filters: [],
          id: "#HomeHunts",
          entity: "vibe",
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data.getListingProducts;
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw error;
  }
}

export async function fetchProductById(productId: string): Promise<Product | undefined> {
  try {
    const response = await fetch('https://api.furrl.in/api/v2/listing/getListingProducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: {
          page: 1,
          pageSize: 10,
          filters: [{ key: "id", value: productId }],
          id: "#HomeHunts",
          entity: "vibe",
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.data.getListingProducts.products.find((product: Product) => product.id === productId);
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
}
