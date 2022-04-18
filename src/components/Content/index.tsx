import React from 'react';
import { Routers } from '../../Routes'

import * as S from './styles';

const Content: React.FC = () => {
  return(
    <S.Container>
      <Routers />
    </S.Container>
  );
}

export { Content };