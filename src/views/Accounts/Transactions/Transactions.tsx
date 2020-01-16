import React from 'react';
import { IApplicationState } from '../../../store';
import { TransactionItem } from './TransactionItem';
import { connect } from 'react-redux';

const mapStateToProps = (state: IApplicationState) => ({
  transactions: state.transactions.list,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

type TProps = TStateProps;

const Transactions: React.FC<TProps> = ({ transactions }) => (
  <React.Fragment>
    {transactions
      .sort((first, second) => first.dateTime - second.dateTime)
      .map(transaction => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
  </React.Fragment>
);

export const ConnectedTransactions = connect(mapStateToProps)(Transactions);

export default ConnectedTransactions;
