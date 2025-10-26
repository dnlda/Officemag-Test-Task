import "./style.css";
import ProductCard from "../../components/ui/ProductCard";
import { products } from "../../products";

const ShowcasePage = () => {
  return (
    <div className="showcase-scroll-container">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ShowcasePage;
