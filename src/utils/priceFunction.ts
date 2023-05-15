export interface FunctionParameters {
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
  acquireSale: number;
  upTestDrive: number;
  prtTestDrive: number;
  conversion: number;
  ourSale: number;
  upDelivery: number;
  marketing: number;
}

export const costFunction = (params: FunctionParameters) => {
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
    acquireSale,

    conversion,
    marketing,
  } = params;

  const productPriceWithSale = productPrice * (1 - acquireSale);
  return (m: number) => {
    return (
      ((1.404 * avgSalary * (7 + Math.floor(m / 100))) / m +
        (warehouseSpace * warehouseSpaceCost * distanceFromCity) / m +
        (2+conversion) * deliveryCostAvg * deliveryPercent +
        productPriceWithSale / (12 * periodValuableUsage) +
        productPriceWithSale * wearTearMulti * stealProbability+marketing) *
      (overheadCosts + 1)
    );
  };
};

export const incomeFunction = (params: FunctionParameters) => {
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
    acquireSale,

    upTestDrive,
    prtTestDrive,
    conversion,
    ourSale,
    upDelivery,
    marketing,
  } = params;
  return (m: number) => {
    const productPriceWithSale = productPrice * (1 - acquireSale);

    const f = (((1.404 * avgSalary * (7 + Math.floor(m / 100))) / m +
    (warehouseSpace * warehouseSpaceCost * distanceFromCity) / m +
    (2+conversion) * deliveryCostAvg * deliveryPercent +
    productPriceWithSale / (12 * periodValuableUsage) +
    productPriceWithSale * wearTearMulti * stealProbability+marketing) *
    (overheadCosts + 1) )
    return (
       (f * (1+
        upTestDrive*(1-prtTestDrive/100)) +
        (productPrice - f) * ourSale*conversion) +
        (deliveryPercent*deliveryCostAvg*upDelivery*(2+conversion))

    );
  };
};

export const clientFunction = (params: FunctionParameters) => {
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
    acquireSale,


    upTestDrive,
    conversion,
    ourSale,
    upDelivery,
    marketing,
  } = params;
  return (m: number) => {
    const productPriceWithSale = productPrice * (1 - acquireSale);

    const f = (((1.404 * avgSalary * (7 + Math.floor(m / 100))) / m +
    (warehouseSpace * warehouseSpaceCost * distanceFromCity) / m +
    (2+conversion) * deliveryCostAvg * deliveryPercent +
    productPriceWithSale / (12 * periodValuableUsage) +
    productPriceWithSale * wearTearMulti * stealProbability+marketing) *
    (overheadCosts + 1) )
    return (
       (f * (1+
        upTestDrive) +
        //(productPrice - f) * conversion) +
        (deliveryPercent*deliveryCostAvg*upDelivery*(2)))

    );
  };
};