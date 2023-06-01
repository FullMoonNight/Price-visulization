import React from "react";
import { debounce } from "ts-debounce";
import { useImmer } from "use-immer";
import { Container, Grid } from "@mui/material";

import { ChartPanel } from "./components/ChartPanel";
import { ParamsPanel } from "./components/ParamsPanel";
import { parameters } from "./constants";
import { useDataset } from "./hooks/useDataset";
import {
    FunctionParameters,
    fixedCostsForOneDealFunction,
    fixedCostsFunction,
    incomeFunction,
    partnerIncomeFunction,
    profitFunction,
    totalCostsForOneDealFunction,
    totalCostsFunction,
    variableCostsForOneDealFunction,
    variableCostsFunction,
} from "./utils/priceFunction";

export const App = () => {
    const initialState = parameters.reduce<{
        [key: string]: number;
    }>((result, curr) => {
        result[curr.paramName] = curr.defaultValue;
        return result;
    }, {});

    const [paramsValue, setParamsValue] = useImmer(initialState);

    const cahangeParameterHandler = (parameterName: string, value: number) => {
        console.log(parameterName, value);

        setParamsValue((draft) => {
            draft[parameterName] = value;
        });
    };

    const onChangeParameter = debounce(cahangeParameterHandler, 1000);

    const dataFirstChart = useDataset({
        params: (paramsValue as unknown) as FunctionParameters,
        axis: 20000,
        chartsInfo: [
            {
                chartFunction: fixedCostsForOneDealFunction,
                label: "fixed",
            },
            {
                chartFunction: totalCostsForOneDealFunction,
                label: "total",
            },
            {
                chartFunction: variableCostsForOneDealFunction,
                label: "variable",
            },
        ],
    });

    const dataSecondChart = useDataset({
        params: (paramsValue as unknown) as FunctionParameters,
        axis: 20000,
        chartsInfo: [
            {
                chartFunction: fixedCostsFunction,
                label: "fixed",
            },
            {
                chartFunction: totalCostsFunction,
                label: "total",
            },
            {
                chartFunction: variableCostsFunction,
                label: "variable",
            },
        ],
    });
    const dataThirdChart = useDataset({
        params: (paramsValue as unknown) as FunctionParameters,
        axis: 20000,
        chartsInfo: [
            {
                chartFunction: incomeFunction,
                label: "income",
            },
            {
                chartFunction: totalCostsFunction,
                label: "total",
            },
        ],
    });

    const dataFourthChart = useDataset({
        params: (paramsValue as unknown) as FunctionParameters,
        axis: 20000,
        chartsInfo: [
            {
                chartFunction: profitFunction,
                label: "profit",
                color: "#cc9aff",
            },
        ],
    });

    const dataPartnerChart = useDataset({
        params: (paramsValue as unknown) as FunctionParameters,
        axis: 20000,
        chartsInfo: [
            {
                chartFunction: partnerIncomeFunction,
                label: "partner",
            },
        ],
    });

    return (
        <Container>
            <ParamsPanel onChangeParameter={onChangeParameter} />
            <Grid container>
                <Grid item xs={12} md={6}>
                    <ChartPanel data={dataFirstChart} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ChartPanel data={dataSecondChart} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ChartPanel data={dataThirdChart} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ChartPanel data={dataFourthChart} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ChartPanel data={dataPartnerChart} />
                </Grid>
            </Grid>
        </Container>
    );
};
