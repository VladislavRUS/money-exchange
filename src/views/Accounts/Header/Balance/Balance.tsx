import React from 'react';
import { Wrapper, Amount, BaseCurrency, IntegerDigits, FractionDigits, Flag, BalanceIn } from './Balance.styles';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { IApplicationState } from '../../../../store';
import { getTotalBalance } from '../../../../store/accounts/selectors';
import { i18n } from '../../../../i18n';
import { withTranslation, WithTranslation } from 'react-i18next';
import { getCurrencyData } from '../../../../store/currencies/selectors';
import { TextButton } from '../../../../components/Buttons/TextButton';
import { Select } from '../../../../components/Select';
import { setBaseCurrency } from '../../../../store/accounts/actions';
import { formatValueInLocale } from '../../../../utils/formatMoneyInLocale';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setBaseCurrency,
    },
    dispatch,
  );

type TDispatchProps = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: IApplicationState) => {
  const { rates } = state.rates;
  const { symbol, flag } = getCurrencyData(state, state.accounts.baseCurrency);

  const totalBalance = getTotalBalance(state);

  return {
    totalBalance,
    symbol,
    flag,
    rates,
    accounts: state.accounts.list,
    baseCurrency: state.accounts.baseCurrency,
  };
};

type TStateProps = ReturnType<typeof mapStateToProps>;

type TProps = TStateProps & TDispatchProps & WithTranslation;

type TState = {
  isOpened: boolean;
};

class Balance extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }

  renderContent = () => {
    const { accounts } = this.props;

    return (
      <React.Fragment>
        {accounts.map(account => (
          <Select.TextItem
            key={account.id}
            text={account.currency}
            onClick={() => {
              this.props.setBaseCurrency(account.currency);
              this.onCloseDropdown();
            }}
          />
        ))}
      </React.Fragment>
    );
  };

  onOpenDropdown = () => {
    this.setState({ isOpened: true });
  };

  onCloseDropdown = () => {
    this.setState({ isOpened: false });
  };

  render() {
    const { rates, symbol, flag, totalBalance, t, baseCurrency } = this.props;

    if (!rates) {
      return null;
    }

    const formattedTotalBalance = formatValueInLocale(i18n.language, totalBalance);

    const [integer, fraction] = formattedTotalBalance.split('.');
    return (
      <Wrapper>
        <Amount>
          {symbol}
          <IntegerDigits>{integer}</IntegerDigits>
          {fraction && <FractionDigits>.{fraction}</FractionDigits>}
        </Amount>
        <BaseCurrency>
          <Flag flagImage={flag} />
          <BalanceIn>{t('accounts.totalBalance')}</BalanceIn>
          <Select
            content={this.renderContent}
            isOpened={this.state.isOpened}
            onClickOutside={this.onCloseDropdown}
            width={282}
          >
            {(ref: any) => <TextButton text={baseCurrency} onClick={this.onOpenDropdown} ref={ref} />}
          </Select>
        </BaseCurrency>
      </Wrapper>
    );
  }
}

const translated = withTranslation();
const ConnectedBalance = connect(mapStateToProps, mapDispatchToProps)(Balance);

export default translated(ConnectedBalance);
