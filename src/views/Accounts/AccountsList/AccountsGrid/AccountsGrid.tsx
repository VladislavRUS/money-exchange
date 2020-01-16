import React from 'react';
import { Wrapper } from './AccountsGrid.styles';
import { connect } from 'react-redux';
import { IApplicationState } from '../../../../store';
import { AccountItem } from './AccountItem';

const mapStateToProps = (state: IApplicationState) => ({
  accounts: state.accounts.list,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

type TProps = TStateProps;

const AccountsGrid: React.FC<TProps> = ({ accounts }) => (
  <Wrapper>
    {accounts.map(account => (
      <AccountItem key={account.currency} account={account} />
    ))}
  </Wrapper>
);

const ConnectedAccountsGrid = connect(mapStateToProps)(AccountsGrid);

export default ConnectedAccountsGrid;
