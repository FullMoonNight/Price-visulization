import {
  FunctionParameters,
  costFunction,
  incomeFunction,
  clientFunction,
} from "../utils/priceFunction";
import { createDataset } from "../utils/createChartDataset";

export const useData = (
  params: FunctionParameters,
  axis: number,
  charts: { cost?: boolean; income?: boolean; expenses?: boolean } = {
    cost: false,
    expenses: false,
    income: false,
  },
  forAll?: boolean
) => {
  const minAsix = 100;
  const step = 10;
  const datasets = [];
  let labels: string[] = [];
  const {
    cost: costChart,
    expenses: expensesChart,
    income: incomeChart,
  } = charts;

  if (expensesChart) {
    const cost = forAll
      ? (x: number) => costFunction(params)(x) * x
      : costFunction(params);
    const { dataset: costD, labels: chartLabels } = createDataset(
      cost,
      axis,
      step,
      minAsix
    );

    datasets.push({
      data: costD,
      label: "Expenses",
      backgroundColor: "#088fbd",
      borderColor: "#088fbd",
    });
    labels = chartLabels;
  }

  if (incomeChart) {
    const income = forAll
      ? (x: number) => incomeFunction(params)(x) * x
      : incomeFunction(params);
    const { dataset: incomeD, labels: chartLabels } = createDataset(
      income,
      axis,
      step,
      minAsix
    );

    datasets.push({
      data: incomeD,
      label: "Income",
      backgroundColor: "#00ff00",
      borderColor: "#00ff00",
    });
    labels = chartLabels;
  }

  if (costChart) {
    const client = forAll
      ? (x: number) => clientFunction(params)(x) * x
      : clientFunction(params);
    const { dataset: clientD, labels: chartLabels } = createDataset(
      client,
      axis,
      step,
      minAsix
    );

    datasets.push({
      data: clientD,
      label: "Cost for client",
      backgroundColor: "red",
      borderColor: "red",
    });
    labels = chartLabels;
  }

  return {
    labels,
    datasets: datasets,
  };
};
