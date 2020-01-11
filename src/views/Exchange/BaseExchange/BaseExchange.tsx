import React from 'react';
import { Wrapper, SelectWrapper } from './BaseExchange.styles';
import { IAccount } from '../../../store/accounts/types';

export enum BaseExchangeMode {
  FROM,
  TO,
}

interface IBaseExchangeProps {
  mode?: BaseExchangeMode;
  placeholder?: string;
  account: IAccount;
}

const BaseExchange: React.FC<IBaseExchangeProps> = ({ mode = BaseExchangeMode.FROM }) => (
  <Wrapper mode={mode}>
    <SelectWrapper />
  </Wrapper>
);

export default BaseExchange;
