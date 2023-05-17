import React from "react";
import { ChartPanel } from "./components/ChartPanel";
import { ParamsPanel } from "./components/ParamsPanel";
import { parameters } from "./constants";
import { useImmer } from "use-immer";
import { useData } from "./hooks/useData";
import { FunctionParameters } from "./utils/priceFunction";
import { Container, Grid } from "@mui/material";

export const App = () => {
  const initialState = parameters.reduce<{
    [key: string]: number;
  }>((result, curr) => {
    result[curr.paramName] = curr.defaultValue;
    return result;
  }, {});

  const [paramsValue, setParamsValue] = useImmer(initialState);

  const onChangeParameter = (parameterName: string, value: number) => {
    setParamsValue((draft) => {
      draft[parameterName] = value;
    });
  };

  const dataFirstChart = useData(
    (paramsValue as unknown) as FunctionParameters,
    20000,
    { fixed: true, total: true, variable: true }
  );
  const dataSecondChart = useData(
    (paramsValue as unknown) as FunctionParameters,
    20000,
    { fixed: true, total: true, variable: true },
    true
  );
  const dataThirdChart = useData(
    (paramsValue as unknown) as FunctionParameters,
    20000,
    { income: true, total: true },
    true
  );
  const dataFourthChart = useData(
    (paramsValue as unknown) as FunctionParameters,
    20000,
    { profit: true },
    true
  );

  return (
    <Container>
      <ParamsPanel onChangeParameter={onChangeParameter} />
      <Grid container>
        <Grid item xs={6}>
          <ChartPanel data={dataFirstChart} />
        </Grid>
        <Grid item xs={6}>
          <ChartPanel data={dataSecondChart} />
        </Grid>
        <Grid item xs={6}>
          <ChartPanel data={dataThirdChart} />
        </Grid>
        <Grid item xs={6}>
          <ChartPanel data={dataFourthChart} />
        </Grid>
      </Grid>
    </Container>
  );
};
