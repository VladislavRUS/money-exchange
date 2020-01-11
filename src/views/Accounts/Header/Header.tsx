import React from 'react';
import { Wrapper } from './Header.styles';
import { Balance } from './Balance';
import { Actions } from './Actions';

const Header = () => (
  <Wrapper>
    <Balance />
    <Actions />
  </Wrapper>
);

export default Header;
