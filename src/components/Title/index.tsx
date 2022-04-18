import React from "react";

import * as S from "./styles";

interface ITitleProps {
  children: React.ReactNode;
}

const Title: React.FC<ITitleProps> = (props) => {
  const { children } = props;
  return (
    <S.Container>
      <S.Title>{children}</S.Title>
    </S.Container>
  );
};
export { Title };
