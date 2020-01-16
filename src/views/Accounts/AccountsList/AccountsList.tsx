import React from 'react';
import { Wrapper } from './AccountsList.styles';
import { Header } from './Header';
import { AccountsGrid } from './AccountsGrid';

const AccountsList = () => (
  <Wrapper>
    <Header />
    <AccountsGrid />
  </Wrapper>
);

export default AccountsList;
