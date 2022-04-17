const productsReducer = (state, action) => {
  console.log(action.type);
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...state, products: action.payload };
    case "LOAD_CATEGORIES":
      return { ...state, categories: action.payload };
    case "LOAD_TEAMS":
      return { ...state, teams: action.payload };
    default:
      break;
  }
};
export { productsReducer };
