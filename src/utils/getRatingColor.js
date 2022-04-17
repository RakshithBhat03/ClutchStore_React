export const getRatingColor = (rating) =>
  rating >= 4
    ? `above_four_rating`
    : rating >= 3
    ? `above_three_rating`
    : `below_three_rating`;
