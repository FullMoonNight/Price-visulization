import React from "react";
import { ChartPanel } from "./components/ChartPanel";
import { ParamsPanel } from "./components/ParamsPanel";
import { parameters } from "./constants";
import { useImmer } from "use-immer";
import { useData } from "./hooks/useData";
import { FunctionParameters } from "./utils/priceFunction";
import { Container } from "@mui/material";

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

  const data = useData((paramsValue as unknown) as FunctionParameters, 10000);

  return (
    <Container>
      <ParamsPanel onChangeParameter={onChangeParameter} />
      <ChartPanel data={data} />
    </Container>
  );
};
