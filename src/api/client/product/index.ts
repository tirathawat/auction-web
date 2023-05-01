export interface Product {
  id: string;
  imageUrl: string;
  title: string;
  price: number;
  formUrl: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(
    process.env.REACT_APP_PRODUCTS_API_URL as string
  );
  const data = await response.json();
  return data.map((e: any): Product => {
    return {
      id: e.id,
      imageUrl: e.imageUrl,
      title: e.name,
      price: e.price,
      formUrl: e.formUrl,
    };
  });
};
