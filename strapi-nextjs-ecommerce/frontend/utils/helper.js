export const getDiscountedPricePercentage = (
  originalPrice,
  discountedPrice
) => {
  const discount = originalPrice - discountedPrice;

  const discountPercantage = (discount / originalPrice) * 100;

  return discountPercantage.toFixed(2);
};
