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
  prtTestDrive: number;
  conversion: number;
  ourSale: number;
  upDelivery: number;
  marketing: number;
  dealCntMonth: number;
  averageCost: number;
}

export const fixedCostsForOneDealFunction = (params: FunctionParameters) => {
  const {
    avgSalary,
    warehouseSpace,
    warehouseSpaceCost,
    distanceFromCity,
    overheadCosts,

    marketing,
  } = params;

  return (m: number) => {
    const warehouse = warehouseSpace * warehouseSpaceCost * distanceFromCity;
    const salaries = 1.404 * avgSalary * (7 + Math.floor(m / 1000));

    const fixedCosts = (warehouse + marketing + salaries) * (overheadCosts + 1);

    return fixedCosts / m;
  };
};

export const fixedCostsFunction = (params: FunctionParameters) => {
  return (m: number) => {
    return fixedCostsForOneDealFunction(params)(m) * m;
  };
};

export const variableCostsForOneDealFunction = (params: FunctionParameters) => {
  const {
    deliveryCostAvg,
    deliveryPercent,
    productPrice,
    periodValuableUsage,
    wearTearMulti,
    stealProbability,
    overheadCosts,
    acquireSale,

    conversion,
    dealCntMonth,
  } = params;
  return (m: number) => {
    const productPriceWithSale = productPrice * (1 - acquireSale);
    const delivery = (2 + conversion) * deliveryCostAvg * deliveryPercent;
    const steal = productPriceWithSale * wearTearMulti * stealProbability;
    const valuableUsage =
      productPriceWithSale / (12 * periodValuableUsage * dealCntMonth);

    const variableCosts =
      (delivery + steal + valuableUsage) * (overheadCosts + 1);
    return variableCosts;
  };
};

export const variableCostsFunction = (params: FunctionParameters) => {
  return (m: number) => {
    return variableCostsForOneDealFunction(params)(m) * m;
  };
};

export const totalCostsForOneDealFunction = (params: FunctionParameters) => {
  return (m: number) => {
    const fixedCosts = fixedCostsForOneDealFunction(params)(m);
    const variableCosts = variableCostsForOneDealFunction(params)(m);
    return fixedCosts + variableCosts;
  };
};

export const totalCostsFunction = (params: FunctionParameters) => {
  return (m: number) => {
    const fixedCosts = fixedCostsFunction(params)(m);
    const variableCosts = variableCostsFunction(params)(m);
    return fixedCosts + variableCosts;
  };
};

export const incomeFunction = (params: FunctionParameters) => {
  const {
    averageCost,
    conversion,
    ourSale,
    productPrice,
    prtTestDrive,
    acquireSale,
  } = params;
  return (m: number) => {
    const income =
      (1 - prtTestDrive) * m * averageCost +
      ourSale *
        m *
        conversion *
        (productPrice - averageCost - productPrice * (1 - acquireSale));
    return income;
  };
};

export const profitFunction = (params: FunctionParameters) => {
  return (m: number) => {
    const profitByRent =
      incomeFunction(params)(m) - totalCostsFunction(params)(m);
    return profitByRent;
  };
};

export const partnerIncomeFunction = (params: FunctionParameters) => {
  const {
    prtTestDrive,
    averageCost,
    conversion,
    ourSale,
    productPrice,
    acquireSale,
  } = params;
  return (m: number) => {
    const profitByTestDrive = prtTestDrive * averageCost * m;
    const profitBySale =
      (productPrice * (1 - acquireSale) +
        productPrice * acquireSale * (1 - ourSale)) *
      m *
      conversion;
    return profitBySale + profitByTestDrive;
  };
};
