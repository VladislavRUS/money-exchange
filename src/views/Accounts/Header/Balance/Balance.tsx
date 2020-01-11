import React from 'react';
import { Wrapper, Amount, BaseCurrency, IntegerDigits, FractionDigits, Flag, BalanceIn } from './Balance.styles';
import { connect } from 'react-redux';
import { IApplicationState } from '../../../../store';
import { getTotalBalance } from '../../../../store/accounts/selectors';
import { i18n } from '../../../../i18n';
import { withTranslation, WithTranslation } from 'react-i18next';
import { getCurrencyData } from '../../../../store/currencies/selectors';

const mapStateToProps = (state: IApplicationState) => {
  const { symbol, flag } = getCurrencyData(state, state.accounts.baseCurrency);

  return {
    totalBalance: new Intl.NumberFormat(i18n.language, { useGrouping: true, minimumFractionDigits: 2 }).format(
      getTotalBalance(state),
    ),
    symbol,
    flag,
    baseCurrency: state.accounts.baseCurrency,
  };
};

type TStateProps = ReturnType<typeof mapStateToProps>;

type TProps = TStateProps & WithTranslation;

const Balance: React.FC<TProps> = ({ symbol, flag, totalBalance, t }) => {
  const [integer, fraction] = totalBalance.split('.');

  return (
    <Wrapper>
      <Amount>
        {symbol}
        <IntegerDigits>{integer}</IntegerDigits>
        <FractionDigits>.{fraction}</FractionDigits>
      </Amount>
      <BaseCurrency>
        <Flag flagImage={require(`../../../../assets/icons/flags/${flag}`)} />
        <BalanceIn>{t('accounts.totalBalance')}</BalanceIn>
      </BaseCurrency>
    </Wrapper>
  );
};

const translated = withTranslation();
const ConnectedBalance = connect(mapStateToProps)(Balance);

export default translated(ConnectedBalance);
