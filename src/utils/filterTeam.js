const filterTeam = (products, filterState) =>
  filterState.filteredTeams.length
    ? products.filter((product) =>
        filterState.filteredTeams.includes(product.team)
      )
    : [...products];

export { filterTeam };
