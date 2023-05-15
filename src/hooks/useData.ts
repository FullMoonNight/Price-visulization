import { CostFunctionParameters, costFunction } from "../utils/costFunction";
import { createDataset } from "../utils/createChartDataset";

export const useData = (params: CostFunctionParameters, axis: number) => {
  const func = costFunction(params);
  const { dataset, labels } = createDataset(func, axis, 10);
  return {
    labels,
    datasets: [
      {
        data: dataset,
        label: "test",
        backgroundColor: "#088fbd",
        borderColor: "#088fbd",
      },
    ],
  };
};
