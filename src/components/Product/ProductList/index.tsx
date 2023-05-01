import { useState, useEffect } from "react";
import { Product, fetchProducts } from "../../../api/client/product";
import ProductCard from "../ProductCard";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

export default function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchAndSetProducts = async () => {
    const fetchedProducts = await fetchProducts();
    setProducts(fetchedProducts);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAndSetProducts();
    const intervalId = setInterval(
      fetchAndSetProducts,
      parseInt(process.env.REACT_APP_FETCH_DURATION_MS as string)
    );

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (isLoading) {
    return (
      <Grid container height="100%" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <Grid
      container
      justifyContent="center"
      spacing={{ xs: 2, sm: 3, md: 4 }}
      columns={{ xs: 2, sm: 3, md: 4 }}
      sx={{ width: "100%" }}
    >
      {products.map((product) => (
        <Grid item key={product.id} sx={{ width: "auto" }}>
          <ProductCard
            title={product.title}
            price={product.price}
            formUrl={product.formUrl}
            imageUrl={product.imageUrl}
          />
        </Grid>
      ))}
    </Grid>
  );
}
