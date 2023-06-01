import { FunctionParameters } from "../utils/priceFunction";
import { createDataset } from "../utils/createChartDataset";
import { generateColor } from "../utils/generateColor";

interface UseDatasetPrams {
    params: FunctionParameters;
    axis: number;
    chartsInfo: {
        chartFunction: (prams: FunctionParameters) => (m: number) => number;
        label: string;
        color?: string;
    }[];
}

interface DatasetInterace {
    data: number[];
    label: string;
    backgroundColor: string;
    borderColor: string;
}

export const useDataset = (data: UseDatasetPrams) => {
    const { params, axis, chartsInfo } = data;

    const step = 10,
        minAsix = 1;

    const datasets: DatasetInterace[] = [];
    let commonLabels: string[] = [];

    chartsInfo.forEach(({ chartFunction, label, color }) => {
        const chartColor = color || generateColor(label);

        const foo = chartFunction(params);
        const { dataset: data, labels } = createDataset(foo, axis, step, minAsix);

        commonLabels = labels;
        datasets.push({
            data,
            label,
            backgroundColor: chartColor,
            borderColor: chartColor,
        });
    });

    return {
        datasets,
        labels: commonLabels,
    };
};
