const filterTeam = (products, filterState) =>
  filterState.teams.length
    ? products.filter((product) => filterState.teams.includes(product.team))
    : [...products];

export { filterTeam };
