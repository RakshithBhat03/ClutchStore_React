import { ProductCard } from "../../../../components";
import { CollectionCard } from "./CollectionCard";
import style from "./Collection.module.css";
import { useSelector } from "react-redux";
const Collection = () => {
  const { allProducts, categories } = useSelector((store) => store.products);
  return (
    <section className={`p-13 ${style.section_wrapper}`}>
      <section className={`${style.main_popular}`}>
        <h2 className="txt-center">Categories</h2>
        <div className="collection-list display-flex flex-wrap gap-2 justify-content-evenly">
          {categories.map((category) => (
            <CollectionCard key={category._id} {...category} />
          ))}
        </div>
      </section>
      <section className={`${style.main_collection}`}>
        <h2 className="txt-center">Featured Products</h2>
        <div
          className={`${style.collection_list} display-flex flex-wrap gap-2 justify-content-evenly`}>
          {allProducts.map(
            (product) =>
              product.isFeatured && (
                <ProductCard key={product._id} product={product} />
              )
          )}
        </div>
      </section>
    </section>
  );
};
export { Collection };
