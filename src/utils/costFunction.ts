export interface CostFunctionParameters {
  avgSalary: number;
  warehouseSpace: number;
  warehouseSpaceCost: number;
  distanceFromCity: number;
  deliveryCostAvg: number;
  deliveryPercent: number;
  productPrice: number;
  periodValuableUsage: number;
  wearTearMulti: number;
  stealProbability: number;
  overheadCosts: number;
}

export const costFunction = (params: CostFunctionParameters) => {
  const {
    avgSalary,
    warehouseSpace,
    warehouseSpaceCost,
    distanceFromCity,
    deliveryCostAvg,
    deliveryPercent,
    productPrice,
    periodValuableUsage,
    wearTearMulti,
    stealProbability,
    overheadCosts,
  } = params;
  return (m: number) => {
    return (
      ((1.404 * avgSalary * (7 + Math.floor(m / 100))) / m +
        warehouseSpace * warehouseSpaceCost * distanceFromCity +
        2 * deliveryCostAvg * deliveryPercent +
        productPrice / (12 * periodValuableUsage) +
        productPrice * wearTearMulti * stealProbability) *
      (overheadCosts + 1) *
      m
    );
  };
};
