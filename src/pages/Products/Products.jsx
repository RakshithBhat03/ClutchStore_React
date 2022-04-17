import { ProductFilter } from "./components/ProductFilter/ProductFilter";
import { ProductShowcase } from "./components/ProductShowcase/ProductShowcase";
import style from "./Products.module.css";
const Products = () => {
  return (
    <div className="main min-75-vh width-100">
      <main>
        <section
          className={`${style.products_wrapper} display-grid width-100 mx-auto min-75-vh mt-9`}>
          <ProductFilter />
          <ProductShowcase />
        </section>
      </main>
    </div>
  );
};
export { Products };
