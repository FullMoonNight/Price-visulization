import {
  FunctionParameters,
  costFunction,
  incomeFunction,
  clientFunction,
} from "../utils/priceFunction";
import { createDataset } from "../utils/createChartDataset";

export const useData = (params: FunctionParameters, axis: number) => {
  const cost = costFunction(params);
  const income = incomeFunction(params);
  const client = clientFunction(params);
  const { dataset: costD, labels } = createDataset(cost, axis, 1);
  const { dataset: incomeD } = createDataset(income, axis, 1);
  const { dataset: clientD } = createDataset(client, axis, 1);
  return {
    labels,
    datasets: [
      {
        data: costD,
        label: "expenses",
        backgroundColor: "#088fbd",
        borderColor: "#088fbd",
      },
      {
        data: incomeD,
        label: "Profit",
        backgroundColor: "#00ff00",
        borderColor: "#00ff00",
      },
      {
        data: clientD,
        label: "cost for client",
        backgroundColor: "red",
        borderColor: "red",
      },

    ],
  };
};
