const filterReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "HIGH_TO_LOW":
      return { ...state, sortBy: "HIGH_TO_LOW" };
    case "LOW_TO_HIGH":
      return { ...state, sortBy: "LOW_TO_HIGH" };
    case "PRICE_RANGE":
      return { ...state, priceRange: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };
    case "CATEGORY":
      return state.categories.includes(action.payload)
        ? {
            ...state,
            categories: state.categories.filter(
              (cartegory) => cartegory !== action.payload
            ),
          }
        : { ...state, categories: [...state.categories, action.payload] };
    case "FAST_DELIVERY":
      return { ...state, fastDelivery: !state.fastDelivery };
    case "IN_STOCK":
      return { ...state, inStock: !state.inStock };
    case "TEAM":
      return state.teams.includes(action.payload)
        ? {
            ...state,
            teams: state.teams.filter((team) => team !== action.payload),
          }
        : { ...state, teams: [...state.teams, action.payload] };
    case "RESET":
      return {
        ...state,
        sortBy: "",
        priceRange: 12000,
        categories: [],
        teams: [],
        rating: "",
        inStock: false,
        fastDelivery: false,
      };
    default:
      break;
  }
};
export { filterReducer };
