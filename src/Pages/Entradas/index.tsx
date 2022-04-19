import React from "react";

import { Title } from '../../components/Title'
import { Filter } from './Filter'

import * as S from "./styles";

const Entradas = () => {
  return (
    <S.Container>
      <Title>Entradas</Title>
      <Filter />
    </S.Container>
  );
};
export { Entradas };
