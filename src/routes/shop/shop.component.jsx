import './shop.styles.scss'
import { ProductsContext } from "../../context/products.context";
import { useContext } from "react";

import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="product-container">
      {products.map((product) => (
        
          <ProductCard key={product.id} product={product} />
    
      ))}
    </div>
  );
};

export default Shop;
