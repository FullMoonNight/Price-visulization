import React, { FC } from "react";
import { Grid } from "@mui/material";

import { ParamsLine } from "../ParamsLine";
import { ParameterObject } from "../../constants";

interface ParamsListProps {
  params: ParameterObject[];
  onChangeParameter: (paramName: string, value: number) => void;
}

export const ParamsList: FC<ParamsListProps> = (props) => {
  const { params, onChangeParameter } = props;

  const renderParameterLines = () => {
    return params.map((param, i) => (
      <Grid key={i} item xl={4} md={6} xs={12}>
        <ParamsLine {...param} onChange={onChangeParameter} />
      </Grid>
    ));
  };

  return (
    <Grid container columnSpacing={2} rowSpacing={4}>
      {renderParameterLines()}
    </Grid>
  );
};
