import React from 'react';
import { Wrapper, IconWrapper, Description, Title, Details, Time, Sum, Minus, Plus } from './TransactionItem.styles';
import { ITransaction } from '../../../../store/transactions/types';
import { FiRefreshCw } from 'react-icons/fi';
import { IApplicationState } from '../../../../store';
import { getAccountSymbol } from '../../../../utils/getAccountSymbol';
import { formatValueInLocale } from '../../../../utils/formatMoneyInLocale';
import { i18n } from '../../../../i18n';
import { connect } from 'react-redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import { format } from 'date-fns';

interface ITransactionItemProps {
  transaction: ITransaction;
}

const mapStateToProps = (state: IApplicationState) => ({
  accounts: state.accounts.list,
  currencies: state.currencies.data,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

type TProps = TStateProps & ITransactionItemProps & WithTranslation;

export const TransactionItem: React.FC<TProps> = ({ transaction, accounts, currencies, t }) => {
  const fromAccount = accounts.find(account => account.id === transaction.fromAccountId);
  const toAccount = accounts.find(account => account.id === transaction.toAccountId);

  if (!fromAccount || !toAccount) {
    return null;
  }

  const fromAccountSymbol = getAccountSymbol(fromAccount, currencies);
  const toAccountSymbol = getAccountSymbol(toAccount, currencies);
  const title = `${t('transactions.item.exchangedTo')} ${toAccount.title}`;

  return (
    <Wrapper>
      <IconWrapper>
        <FiRefreshCw size={20} color={'#8995A2'} />
      </IconWrapper>
      <Description>
        <Title>{title}</Title>
        <Details>
          <Time>{format(new Date(transaction.dateTime), 'yyyy-MM-dd, HH:mm')}</Time>
        </Details>
      </Description>
      <Sum>
        <Minus>
          -{fromAccountSymbol}
          {formatValueInLocale(i18n.language, transaction.fromAccountValue)}
        </Minus>
        <Plus>
          -{toAccountSymbol}
          {formatValueInLocale(i18n.language, transaction.toAccountValue)}
        </Plus>
      </Sum>
    </Wrapper>
  );
};

const translated = withTranslation();

const ConnectedTransactionItem = connect(mapStateToProps)(TransactionItem);

export default translated(ConnectedTransactionItem);
