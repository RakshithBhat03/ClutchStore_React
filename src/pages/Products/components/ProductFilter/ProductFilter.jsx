import { useProduct } from "../../../../context/";
import { useFilter } from "../../../../context/";
import style from "./ProductFilter.module.css";
const ProductFilter = () => {
  const { productData } = useProduct();
  const { categories, teams } = productData;
  const { filter, filterDispatch } = useFilter();
  return (
    <aside
      className={`${style.filter_wrapper} display-flex flex-col justify-content-start py-7 ml-9 mr-3 px-9 gap-1`}>
      <header className="filter-heading display-flex justify-content-between align-items-center">
        <h3 className="my-5">Filters</h3>
        <button
          type="button"
          onClick={() => filterDispatch({ type: "RESET" })}
          className={`btn ${style.btn__primary_dark} btn--md txt-white filter-clear-btn`}>
          Reset
        </button>
      </header>
      <hr />
      <section className="filter-price display-flex flex-col justify-content-center gap-1">
        <h4 className="my-1">Price</h4>
        <div className="price-slider width-100 ">
          <input
            type="range"
            min={0}
            max={20000}
            step={4000}
            list="tickmarks"
            className="input-slider width-100"
            onChange={(event) =>
              filterDispatch({
                type: "PRICE_RANGE",
                payload: event.target.value,
              })
            }
            value={filter.priceRange}
          />
          <datalist
            className="display-flex justify-content-between"
            id="tickmarks">
            <option value={0} className="txt-sm txt-semibold" label={0} />
            <option value={4000} className="txt-sm txt-semibold" label="4K" />
            <option value={8000} className="txt-sm txt-semibold" label="8K" />
            <option value={12000} className="txt-sm txt-semibold" label="12K" />
            <option value={16000} className="txt-sm txt-semibold" label="16K" />
            <option value={20000} className="txt-sm txt-semibold" label="20K" />
          </datalist>
        </div>
      </section>
      <hr />
      <section className="filter-category display-flex flex-col justify-content-center gap-1">
        <h4 className="my-1 txt-bold">Category</h4>
        <ul className="pl-10">
          {categories.map((category) => (
            <li key={category._id} className="py-5">
              <label className="txt-reg display-flex align-items-center">
                <input
                  type="checkbox"
                  name="category"
                  className="txt-reg mr-9"
                  onChange={() =>
                    filterDispatch({
                      type: "CATEGORY",
                      payload: category.categoryName,
                    })
                  }
                  checked={filter.categories.includes(category.categoryName)}
                />
                {category.categoryName}
              </label>
            </li>
          ))}
        </ul>
      </section>
      <hr />
      <section className="filter-category display-flex flex-col justify-content-center gap-1">
        <h4 className="my-1 txt-bold">Fast Delivery</h4>
        <label className="txt-reg display-flex align-items-center ml-9">
          <input
            type="checkbox"
            name="fast-delivery"
            className="txt-reg mr-9"
            onChange={() =>
              filterDispatch({
                type: "FAST_DELIVERY",
              })
            }
            checked={filter.fastDelivery}
          />
          Only Fast Delivery
        </label>
      </section>
      <hr />
      <section className="filter-category display-flex flex-col justify-content-center gap-1">
        <h4 className="my-1 txt-bold">In Stock</h4>
        <label className="txt-reg display-flex align-items-center ml-9">
          <input
            type="checkbox"
            name="in-stock"
            className="txt-reg mr-9"
            onChange={() =>
              filterDispatch({
                type: "IN_STOCK",
              })
            }
            checked={filter.inStock}
          />
          Only In Stock
        </label>
      </section>
      <hr />
      <section className="filter-category display-flex flex-col justify-content-center gap-1">
        <h4 className="my-1 txt-bold">Teams</h4>
        <ul className="pl-10">
          {teams.map((team) => (
            <li key={team._id} className="py-5">
              <label className="txt-reg display-flex align-items-center">
                <input
                  type="checkbox"
                  name="team"
                  className="txt-reg mr-9"
                  onChange={() =>
                    filterDispatch({
                      type: "TEAM",
                      payload: team.teamName,
                    })
                  }
                  checked={filter.teams.includes(team.teamName)}
                />
                {team.teamName}
              </label>
            </li>
          ))}
        </ul>
      </section>
      <hr />
      <section className="filter-rating display-flex flex-col justify-content-center gap-1">
        <h4 className="my-1 ">Ratings</h4>
        <ul className="pl-10">
          {[4, 3, 2, 1].map((rating) => (
            <li
              key={rating}
              className="py-5 display-flex align-items-center gap-1">
              <input
                onChange={() =>
                  filterDispatch({ type: "RATING", payload: rating })
                }
                type="radio"
                name="star-rating"
                id={`rating-${rating}`}
                checked={filter.rating === rating}
              />
              <label htmlFor={`rating-${rating}`}>
                <span>{rating}</span>
                <i className="fas fa-star" /> &amp; above
              </label>
            </li>
          ))}
        </ul>
      </section>
      <hr />
      <section className="filter-sort display-flex flex-col justify-content-center gap-1">
        <h4 className="my-1 txt-bold">Sort by</h4>
        <ul className="pl-10">
          <li className="py-5 display-flex align-items-center gap-1">
            <input
              onChange={() => filterDispatch({ type: "HIGH_TO_LOW" })}
              checked={filter.sortBy === "HIGH_TO_LOW"}
              type="radio"
              name="radio-sort"
              id="sort-htl"
            />
            <label htmlFor="sort-htl">High to low</label>
          </li>
          <li className="py-5 display-flex align-items-center gap-1">
            <input
              onChange={() => filterDispatch({ type: "LOW_TO_HIGH" })}
              checked={filter.sortBy === "LOW_TO_HIGH"}
              type="radio"
              name="radio-sort"
              id="sort-lth"
            />
            <label htmlFor="sort-lth">Low to high</label>
          </li>
        </ul>
      </section>
    </aside>
  );
};
export { ProductFilter };
