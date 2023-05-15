import { FunctionParameters } from "./utils/priceFunction";

export interface ParameterObject {
  paramName: keyof FunctionParameters;
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
    label: "Площадь склада",
    range: [0, 1000],
    defaultValue: 10,
    step: 50,
  },
  {
    paramName: "warehouseSpaceCost",
    label: "Цена за метр склада",
    range: [0, 5000],
    defaultValue: 0,
    step: 500,
  },
  {
    paramName: "distanceFromCity",
    label: "Коэффициент удаленности от города",
    range: [0, 1],
    defaultValue: 0.5,
    step: 0.05,
  },
  {
    paramName: "deliveryCostAvg",
    label: "Средняя цена доставки",
    range: [0, 5000],
    defaultValue: 1000,
    step: 100,
  },
  {
    paramName: "deliveryPercent",
    label: "Процент заказов с доставкой",
    range: [0, 1],
    defaultValue: 0,
    step: 0.01,
  },
  {
    paramName: "productPrice",
    label: "Средняя рыночная цена товара",
    range: [0, 500000],
    defaultValue: 40000,
    step: 10000,
  },
  {
    paramName: "acquireSale",
    label: "Скидка на товар для нас",
    range: [0, 1],
    defaultValue: 0.2,
    step: 0.01,
  },
  {
    paramName: "periodValuableUsage",
    label: "Период полезного использования",
    range: [0, 100],
    defaultValue: 3,
    step: 1,
  },
  {
    paramName: "wearTearMulti",
    label: "Среднее состояние товара у нас",
    range: [0, 1],
    defaultValue: 1,
    step: 0.05,
  },
  {
    paramName: "stealProbability",
    label: "Вероятность кражи",
    range: [0, 1],
    defaultValue: 0.05,
    step: 0.01,
  },
  {
    paramName: "overheadCosts",
    label: "Процент накладных расходов",
    range: [0, 1],
    defaultValue: 0,
    step: 0.01,
  },
  {
    paramName: "upTestDrive",
    label: "Процент наценки за тест-драйв",
    range: [0, 1],
    defaultValue: 0.3,
    step: 0.01,
  },
  {
    paramName: "prtTestDrive",
    label: "Процент партнерам за тест-драйв",
    range: [0, 1],
    defaultValue: 0.5,
    step: 0.01,
  },
  {
    paramName: "conversion",
    label: "Конверсия на продажу с тест-драйва",
    range: [0, 1],
    defaultValue: 0.2,
    step: 0.01,
  },
  {
    paramName: "ourSale",
    label: "Наш процент с продажи",
    range: [0, 1],
    defaultValue: 0.5,
    step: 0.01,
  },
  {
    paramName: "upDelivery",
    label: "Процент наценки за доставку",
    range: [0, 1],
    defaultValue: 0.1,
    step: 0.01,
  },
  {
    paramName: "marketing",
    label: "Расход на маркетинг",
    range: [0, 1000],
    defaultValue: 135,
    step: 1,
  },
];
