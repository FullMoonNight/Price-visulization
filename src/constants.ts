export interface ParameterObject {
  paramName: string;
  range: [number, number];
  defaultValue: number;
  step: number;
  label?: string;
}

export const parameters: ParameterObject[] = [
  {
    paramName: "avgSalary",
    label: "Средняя зарплата",
    range: [0, 500000],
    defaultValue: 50000,
    step: 10000,
  },
  {
    paramName: "warehouseSpace",
    range: [10, 1000],
    defaultValue: 10,
    step: 50,
  },
  {
    paramName: "warehouseSpaceCost",
    range: [0, 5000],
    defaultValue: 3000,
    step: 500,
  },
  {
    paramName: "distanceFromCity",
    range: [0, 1],
    defaultValue: 0.5,
    step: 0.05,
  },
  {
    paramName: "deliveryCostAvg",
    range: [0, 2000],
    defaultValue: 1000,
    step: 100,
  },
  {
    paramName: "deliveryPercent",
    range: [0, 100],
    defaultValue: 30,
    step: 1,
  },
  {
    paramName: "productPrice",
    range: [0, 500000],
    defaultValue: 40000,
    step: 10000,
  },
  {
    paramName: "periodValuableUsage",
    range: [0, 20],
    defaultValue: 3,
    step: 1,
  },
  {
    paramName: "wearTearMulti",
    range: [0, 1],
    defaultValue: 1,
    step: 0.05,
  },
  {
    paramName: "stealProbability",
    range: [0, 1],
    defaultValue: 0.05,
    step: 0.01,
  },
  {
    paramName: "overheadCosts",
    range: [0, 1],
    defaultValue: 0,
    step: 0.01,
  },
];
