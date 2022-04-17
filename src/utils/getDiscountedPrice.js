export const getDiscountedPrice = (discountPercentage, productPrice) =>
  Math.floor(
    Number(productPrice) -
      Number(productPrice) * (Number(discountPercentage) / 100)
  );
