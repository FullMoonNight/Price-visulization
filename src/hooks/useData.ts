import {
  FunctionParameters,
  fixedCostsFunction,
  variableCostsFunction,
  totalCostsFunction,
  fixedCostsForOneDealFunction,
  variableCostsForOneDealFunction,
  totalCostsForOneDealFunction,
  profitFunction,
  incomeFunction,
  partnerIncomeFunction,
} from "../utils/priceFunction";
import { createDataset } from "../utils/createChartDataset";

export const useData = (
  params: FunctionParameters,
  axis: number,
  charts: {
    total?: boolean;
    variable?: boolean;
    fixed?: boolean;
    profit?: boolean;
    income?: boolean;
    partner?: boolean;
  } = {
    total: false,
    variable: false,
    fixed: false,
    profit: false,
    income: false,
    partner: false,
  },
  forAll?: boolean
) => {
  const minAsix = 1;
  const step = 10;
  const datasets = [];
  let labels: string[] = [];
  const { total, fixed, profit, variable, income, partner } = charts;

  if (fixed) {
    const foo = forAll
      ? fixedCostsFunction(params)
      : fixedCostsForOneDealFunction(params);
    const { dataset: costD, labels: chartLabels } = createDataset(
      foo,
      axis,
      step,
      minAsix
    );

    datasets.push({
      data: costD,
      label: "fixed",
      backgroundColor: "#088fbd",
      borderColor: "#088fbd",
    });
    labels = chartLabels;
  }

  if (variable) {
    const foo = forAll
      ? variableCostsFunction(params)
      : variableCostsForOneDealFunction(params);
    const { dataset: incomeD, labels: chartLabels } = createDataset(
      foo,
      axis,
      step,
      minAsix
    );

    datasets.push({
      data: incomeD,
      label: "variable",
      backgroundColor: "#00ff00",
      borderColor: "#00ff00",
    });
    labels = chartLabels;
  }

  if (total) {
    const foo = forAll
      ? totalCostsFunction(params)
      : totalCostsForOneDealFunction(params);
    const { dataset: clientD, labels: chartLabels } = createDataset(
      foo,
      axis,
      step,
      minAsix
    );

    datasets.push({
      data: clientD,
      label: "total",
      backgroundColor: "#ff0000",
      borderColor: "#ff0000",
    });
    labels = chartLabels;
  }

  if (profit) {
    const foo = profitFunction(params);

    const { dataset, labels: profitLabels } = createDataset(
      foo,
      axis,
      step,
      minAsix
    );

    datasets.push({
      data: dataset,
      label: "profit",
      backgroundColor: "#cc9aff",
      borderColor: "#cc9aff",
    });
    labels = profitLabels;
  }

  if (income) {
    const foo = incomeFunction(params);

    const { dataset, labels: profitLabels } = createDataset(
      foo,
      axis,
      step,
      minAsix
    );

    datasets.push({
      data: dataset,
      label: "income",
      backgroundColor: "purple",
      borderColor: "purple",
    });
    labels = profitLabels;
  }

  if (partner) {
    const foo = partnerIncomeFunction(params);

    const { dataset, labels: profitLabels } = createDataset(
      foo,
      axis,
      step,
      minAsix
    );

    datasets.push({
      data: dataset,
      label: "partner",
      backgroundColor: "orange",
      borderColor: "orange",
    });
    labels = profitLabels;
  }

  return {
    labels,
    datasets: datasets,
  };
};
