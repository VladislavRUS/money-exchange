import React from 'react';
import { Wrapper, SelectWrapper, BigInput } from './BaseExchange.styles';
import { IAccount } from '../../../store/accounts/types';

export enum BaseExchangeMode {
  FROM,
  TO,
}

interface IBaseExchangeProps {
  mode?: BaseExchangeMode;
  placeholder?: string;
  account: IAccount;
  value: number;
  onChangeValue: (value: number) => void;
}

class BaseExchange extends React.Component<IBaseExchangeProps, any> {
  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const withoutNumbers = event.currentTarget.value.replace(/\D/, '');
    this.props.onChangeValue(+withoutNumbers);
  };

  render() {
    const { value, mode = BaseExchangeMode.FROM } = this.props;

    return (
      <Wrapper mode={mode}>
        <SelectWrapper />
        <BigInput onChange={this.onChange} placeholder={'0'} value={value} />
      </Wrapper>
    );
  }
}

export default BaseExchange;
