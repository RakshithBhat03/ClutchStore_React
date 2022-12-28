import { useDispatch, useSelector } from "react-redux";
import { Loader, Modal } from "../../../../components";
import {
  filterCategory,
  filterFastDelivery,
  filterHighToLow,
  filterInStock,
  filterLowToHigh,
  filterPriceRange,
  filterRating,
  filterReset,
  filterTeam,
} from "../../../../features/filterSlice";
import { closeModal } from "../../../../features/modalSlice";
import style from "./ProductFilter.module.css";
const ProductFilter = () => {
  const { categories, teams, isLoading } = useSelector(
    (store) => store.products
  );
  const dispatch = useDispatch();
  const {
    filteredCategories,
    fastDelivery,
    inStock,
    priceRange,
    rating,
    sortBy,
    filteredTeams,
  } = useSelector((store) => store.filter);
  return (
    <aside
      className={`${style.filter_wrapper} display-flex flex-col justify-content-start py-7 ml-9 mr-3 px-9 gap-1`}>
      <header className="filter-heading display-flex justify-content-between align-items-center">
        <h3 className="my-5">Filters</h3>
        <button
          type="button"
          onClick={() => dispatch(filterReset())}
          className={`btn ${style.btn__primary_dark} btn--md txt-white filter-clear-btn ml-auto`}>
          Reset
        </button>
        <button
          type="button"
          onClick={() => dispatch(closeModal())}
          className={`btn ${style.btn__close_modal} btn--md txt-white filter-clear-btn`}>
          <i className="fa fa-times"></i>
        </button>
      </header>
      <section className="filter-price display-flex flex-col justify-content-center gap-1">
        <h4 className="my-1">Price</h4>
        <div className="price-slider width-100 ">
          <input
            type="range"
            min={0}
            max={20000}
            step={4000}
            list="tickmarks"
            className={`input-slider width-100 ${style.input_slider}`}
            onChange={(event) => dispatch(filterPriceRange(event.target.value))}
            value={priceRange}
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
      <section className="filter-category display-flex flex-col justify-content-center gap-1">
        <h4 className="my-1 txt-bold">Category</h4>
        {isLoading && <Loader />}
        <ul className="pl-10">
          {categories.map((category) => (
            <li key={category._id} className="py-5">
              <label className="txt-reg txt-semibold display-flex align-items-center">
                <input
                  type="checkbox"
                  name="category"
                  className="txt-reg mr-9"
                  onChange={() =>
                    dispatch(filterCategory(category.categoryName))
                  }
                  checked={filteredCategories.includes(category.categoryName)}
                />
                {category.categoryName}
              </label>
            </li>
          ))}
        </ul>
      </section>
      <section className="filter-category display-flex flex-col justify-content-center gap-1">
        <h4 className="my-1 txt-bold">Fast Delivery</h4>
        <label className="txt-reg txt-semibold display-flex align-items-center ml-9">
          <input
            type="checkbox"
            name="fast-delivery"
            className="txt-reg mr-9"
            onChange={() => dispatch(filterFastDelivery())}
            checked={fastDelivery}
          />
          Only Fast Delivery
        </label>
      </section>
      <section className="filter-category display-flex flex-col justify-content-center gap-1">
        <h4 className="my-1 txt-bold">In Stock</h4>
        <label className="txt-reg txt-semibold display-flex align-items-center ml-9">
          <input
            type="checkbox"
            name="in-stock"
            className="txt-reg mr-9"
            onChange={() => dispatch(filterInStock())}
            checked={inStock}
          />
          Only In Stock
        </label>
      </section>
      <section className="filter-category display-flex flex-col justify-content-center gap-1">
        <h4 className="my-1 txt-bold">Teams</h4>
        {isLoading && <Loader />}
        <ul className="pl-10">
          {teams.map((team) => (
            <li key={team._id} className="py-5">
              <label className="txt-reg txt-semibold display-flex align-items-center">
                <input
                  type="checkbox"
                  name="team"
                  className="txt-reg mr-9"
                  onChange={() => dispatch(filterTeam(team.teamName))}
                  checked={filteredTeams.includes(team.teamName)}
                />
                {team.teamName}
              </label>
            </li>
          ))}
        </ul>
      </section>
      <section className="filter-rating display-flex flex-col justify-content-center gap-1">
        <h4 className="my-1 ">Ratings</h4>
        <ul className="pl-10">
          {[4, 3, 2, 1].map((ratingNumber, index) => (
            <li
              key={index}
              className="py-5 display-flex align-items-center gap-1">
              <input
                onChange={() => dispatch(filterRating(ratingNumber))}
                type="radio"
                name="star-rating"
                id={`rating-${ratingNumber}`}
                checked={ratingNumber === rating}
              />
              <label htmlFor={`rating-${ratingNumber}`}>
                <span>{ratingNumber}</span>
                <i className="fas fa-star" /> &amp; above
              </label>
            </li>
          ))}
        </ul>
      </section>
      <section className="filter-sort display-flex flex-col justify-content-center gap-1">
        <h4 className="my-1 txt-bold">Sort by</h4>
        <ul className="pl-10">
          <li className="py-5 txt-semibold display-flex align-items-center gap-1">
            <input
              onChange={() => dispatch(filterHighToLow())}
              checked={sortBy === "HIGH_TO_LOW"}
              type="radio"
              name="radio-sort"
              id="sort-htl"
            />
            <label htmlFor="sort-htl">High to low</label>
          </li>
          <li className="py-5 txt-semibold display-flex align-items-center gap-1">
            <input
              onChange={() => dispatch(filterLowToHigh())}
              checked={sortBy === "LOW_TO_HIGH"}
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
