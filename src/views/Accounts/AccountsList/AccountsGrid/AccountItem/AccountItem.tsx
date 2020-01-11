import React from 'react';
import { Wrapper, Header, Information, Title, Currency, Flag, Value } from './AccountItem.styles';
import { IAccount } from '../../../../../store/accounts/types';
import { IApplicationState } from '../../../../../store';
import { getCurrencyData } from '../../../../../store/currencies/selectors';
import { connect } from 'react-redux';
import { i18n } from '../../../../../i18n';

const mapStateToProps = (state: IApplicationState, ownProps: IAccountItemProps) => {
  const { symbol, flag } = getCurrencyData(state, ownProps.account.currency);

  return {
    symbol,
    flag,
  };
};

type TStateProps = ReturnType<typeof mapStateToProps>;

interface IAccountItemProps {
  account: IAccount;
}

type TProps = IAccountItemProps & TStateProps;

const AccountItem: React.FC<TProps> = ({ account, symbol, flag }) => (
  <Wrapper>
    <Header>
      <Information>
        <Title>{account.title}</Title>
        <Currency>{account.currency}</Currency>
      </Information>
      <Flag flagImage={require(`../../../../../assets/icons/flags/${flag}`)} />
    </Header>
    <Value>
      {symbol}
      {new Intl.NumberFormat(i18n.language, { useGrouping: true, minimumFractionDigits: 2 }).format(account.value)}
    </Value>
  </Wrapper>
);

const ConnectedAccountItem = connect(mapStateToProps)(AccountItem);

export default ConnectedAccountItem;
