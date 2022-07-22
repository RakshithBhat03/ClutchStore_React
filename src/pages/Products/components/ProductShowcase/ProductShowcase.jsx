import { ProductCard, SplashScreen } from "../../../../components";
import { getFilteredData } from "../../../../utils/";
import "./ProductShowcase.css";
import { useSelector } from "react-redux";
import { Loader } from "../../../../components";
const ProductShowcase = () => {
  const { allProducts, isLoading } = useSelector((store) => store.products);
  const filter = useSelector((store) => store.filter);
  const filteredData = getFilteredData(allProducts, filter);

  return isLoading ? (
    <Loader />
  ) : filteredData.length !== 0 ? (
    <section
      className={`showcase-wrapper display-grid width-100 px-5 pb-9 gap-2`}>
      {filteredData.map((product) => (
        <div className="mx-auto" key={product._id}>
          <ProductCard key={product._id} product={product} />
        </div>
      ))}
    </section>
  ) : (
    <SplashScreen text="No Products from this price range" emptyCart={true} />
  );
};

export { ProductShowcase };
