import { Modal, ToggleFilter } from "../../components";
import { useDocumentTitle, useWindowWidth } from "../../hooks";
import { ProductFilter } from "./components/ProductFilter/ProductFilter";
import { ProductShowcase } from "./components/ProductShowcase/ProductShowcase";
import style from "./Products.module.css";
const Products = () => {
  useDocumentTitle("Products | Clutch Store");
  const width = useWindowWidth();
  return (
    <div className="main min-75-vh width-100">
      <main>
        <section
          className={`${style.products_wrapper} display-grid width-100 mx-auto min-75-vh my-9`}>
          {width < 900 && <ToggleFilter />}
          {width > 900 ? (
            <ProductFilter />
          ) : (
            <Modal disableClose={true}>
              <ProductFilter />
            </Modal>
          )}
          <ProductShowcase />
        </section>
      </main>
    </div>
  );
};
export { Products };
