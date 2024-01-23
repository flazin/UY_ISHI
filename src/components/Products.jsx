import styles from "./products.module.css";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";

const skeletons = [1, 2, 3, 4];
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    setLoading(true);
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  return (
    <>
      <h2 className={styles.heading}>Yengi tovarlar</h2>

      <div className={styles.products}>
        {loading
          ? skeletons.map(skeleton => <ProductCardSkeleton key={skeleton} />)
          : products.map(product => (
              <ProductCard
                key={product.id}
                img={product.images[0]}
                title={product.title}
                price={product.price}
              />
            ))}
      </div>
    </>
  );
};

export default Products;
