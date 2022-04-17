import { v4 as uuid } from "uuid";
export const getTeams = (products) => {
  const uniqueTeams = products.reduce(
    (prev, curr) => [...new Set(prev.concat(curr.team))],
    []
  );
  return uniqueTeams.reduce(
    (prev, curr) => [...prev, { _id: uuid(), teamName: curr }],
    []
  );
};
