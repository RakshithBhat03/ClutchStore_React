import { useProduct } from "../../../../context/";
import { useFilter } from "../../../../context";
import { ProductCard } from "../../../../components/card/ProductCard";
import { getFilteredData } from "../../../../utils/";
import "./ProductShowcase.css";
const ProductShowcase = () => {
  const { productData } = useProduct();
  const { filter } = useFilter();
  const filteredData = getFilteredData(productData.products, filter);
  return (
    <section
      className={`showcase-wrapper display-grid width-100 px-5 pb-9 gap-2`}>
      {filteredData.map((product) => (
        <div className="mx-auto" key={product._id}>
          <ProductCard key={product._id} product={product} />
        </div>
      ))}
    </section>
  );
};

export { ProductShowcase };
