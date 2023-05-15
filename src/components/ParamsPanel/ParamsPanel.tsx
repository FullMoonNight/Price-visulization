import React, { FC } from "react";
import { ParamsList } from "../ParamsList";
import * as S from "./styled";

import { parameters } from "../../constants";

interface ParamsPanelProps {
  onChangeParameter: (paramName: string, value: number) => void;
}

export const ParamsPanel: FC<ParamsPanelProps> = (props) => {
  const { onChangeParameter } = props;
  return (
    <>
      <S.ParamsTitle>Параметры</S.ParamsTitle>
      <ParamsList params={parameters} onChangeParameter={onChangeParameter} />
    </>
  );
};
