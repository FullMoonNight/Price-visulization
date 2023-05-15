import React, { FC } from "react";
import { Grid, Slider, Typography } from "@mui/material";

interface ParamsLineProps {
  paramName: string;
  label?: string;
  range?: [number, number];
  step?: number;
  defaultValue?: number;
  onChange: (paramName: string, value: number) => void;
}

export const ParamsLine: FC<ParamsLineProps> = (props) => {
  const { paramName, defaultValue, range, step, onChange, label } = props;
  const [minValue, maxValue] = range || [0, 100];

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Typography variant={"subtitle2"}>{label || paramName}</Typography>
      </Grid>
      <Grid item xs={8}>
        <Slider
          aria-label={paramName}
          marks
          min={minValue}
          max={maxValue}
          step={step}
          track={false}
          defaultValue={defaultValue || minValue}
          valueLabelDisplay="auto"
          onChange={(_, value) => onChange(paramName, value as number)}
        />
      </Grid>
    </Grid>
  );
};
