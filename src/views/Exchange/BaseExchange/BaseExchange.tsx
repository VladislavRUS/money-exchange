import React from 'react';
import {
  Wrapper,
  SelectWrapper,
  ExchangeInput,
  ExchangeInputWrapper,
  Currency,
  Sign,
  ExchangeContentWrapper,
  CurrentRate,
  RateTitle,
  RateValue,
} from './BaseExchange.styles';
import { IAccount } from '../../../store/accounts/types';
import { RegularInput } from '../../../components/RegularInput';
import { Select } from '../../../components/Select';
import { IApplicationState } from '../../../store';
import { connect } from 'react-redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import { convertBetweenCurrencies } from '../../../utils/covertBetweenCurrencies';
import { formatValueInLocale } from '../../../utils/formatMoneyInLocale';
import { i18n } from '../../../i18n';

const MAX_VALUE = 1000000000;

export enum BaseExchangeMode {
  FROM = 'exchange-from',
  TO = 'exchange-to',
}

interface IBaseExchangeProps {
  mode?: BaseExchangeMode;
  placeholder?: string;
  account: IAccount;
  value: string;
  onChangeValue: (value: number) => void;
  onSelectAccount: (account: IAccount) => void;
  onSetBaseAccount: (account: IAccount) => void;
}

const mapStateToProps = (state: IApplicationState) => ({
  accounts: state.accounts.list,
  baseAccount: state.exchange.baseAccount,
  currencies: state.currencies.data,
  fromAccount: state.exchange.fromAccount,
  toAccount: state.exchange.toAccount,
  rates: state.rates.rates,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

type TProps = TStateProps & IBaseExchangeProps & WithTranslation;

type TState = {
  isSelectOpened: boolean;
  searchStr: string;
  changedSearch: boolean;
};

class BaseExchange extends React.Component<TProps, TState> {
  caretStart: number | null = null;
  exchangeInputRef: any = null;

  constructor(props: TProps) {
    super(props);
    this.state = {
      isSelectOpened: false,
      changedSearch: false,
      searchStr: this.getTitleFromAccount(this.props.account),
    };
  }

  componentDidUpdate(prevProps: Readonly<TProps>): void {
    if (prevProps.account !== this.props.account) {
      this.setState({ searchStr: this.getTitleFromAccount(this.props.account) });
    }

    if (prevProps.value !== this.props.value && this.exchangeInputRef && this.caretStart) {
      const position = this.getCaretPosition(this.props.value, this.caretStart);
      this.exchangeInputRef.setSelectionRange(position, position);
    }
  }

  get fontSize() {
    if (this.props.value.length < 7) {
      return 6;
    }

    if (this.props.value.length < 11) {
      return 5;
    }

    return 4;
  }

  get currentRate() {
    const { baseAccount, fromAccount, toAccount, currencies, rates } = this.props;

    if (fromAccount && toAccount && rates) {
      const fromAccountSymbol = currencies[fromAccount.currency].symbol;
      const toAccountSymbol = currencies[toAccount.currency].symbol;

      if (fromAccount === baseAccount) {
        const toValue = convertBetweenCurrencies(fromAccount.currency, 1, toAccount.currency, rates);
        return `${fromAccountSymbol}1 = ${toAccountSymbol}${formatValueInLocale(i18n.language, toValue)}`;
      } else {
        const fromValue = convertBetweenCurrencies(toAccount.currency, 1, fromAccount.currency, rates);
        return `${toAccountSymbol}1 = ${fromAccountSymbol}${formatValueInLocale(i18n.language, fromValue)}`;
      }
    }

    return '';
  }

  getCaretPosition(value: string, position: number) {
    const leftPart = value.slice(0, position);
    const commasNumber = leftPart.split('').filter(symbol => symbol === ',').length;

    return position + commasNumber;
  }

  getTitleFromAccount = (account: IAccount) => account.currency + ' ' + account.title;

  onOpenSelect = () => {
    this.setState({ isSelectOpened: true });
  };

  onCloseSelect = (searchStr: string) => {
    this.setState({
      isSelectOpened: false,
      searchStr,
      changedSearch: false,
    });
  };

  onClickOutside = () => {
    this.onCloseSelect(this.getTitleFromAccount(this.props.account));
  };

  onKeyDown = (event: any) => {
    if (event.key === 'Backspace' && this.exchangeInputRef) {
      const { selectionStart, selectionEnd } = event.currentTarget;

      if (this.props.value[selectionStart - 1] === ',') {
        this.exchangeInputRef.setSelectionRange(selectionStart - 1, selectionEnd - 1);
        event.preventDefault();
      }
    }
  };

  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value || '0';

    if (!/^[0-9.,]+$/.test(value)) {
      return;
    }

    this.caretStart = event.currentTarget.selectionStart;

    const parsedValue = parseFloat(value.replace(/,/g, ''));

    if (parsedValue > MAX_VALUE) {
      return;
    }

    this.props.onChangeValue(parsedValue);
  };

  onChangeSearch = (searchStr: string) => {
    this.setState({ searchStr, changedSearch: true });
  };

  renderContent = () => {
    const { accounts } = this.props;

    const searchStr = this.state.searchStr.toLowerCase();

    const filteredAccounts = this.state.changedSearch
      ? accounts.filter(account => {
          const search = account.title + account.currency;
          return search.toLowerCase().indexOf(searchStr) !== -1;
        })
      : accounts;

    return (
      <React.Fragment>
        {filteredAccounts.map(account => (
          <Select.TextItem
            text={this.getTitleFromAccount(account)}
            onClick={() => {
              this.onCloseSelect(this.getTitleFromAccount(account));
              this.props.onSelectAccount(account);
              this.props.onSetBaseAccount(account);
            }}
            key={account.id}
          />
        ))}
      </React.Fragment>
    );
  };

  handleExchangeInputRef = (element: any) => {
    this.exchangeInputRef = element;
  };

  onFocus = () => {
    this.props.onSetBaseAccount(this.props.account);
  };

  render() {
    const { value, currencies, account, baseAccount, mode = BaseExchangeMode.FROM, t } = this.props;

    const inputValue = value === '0' ? '' : value;
    const currencySymbol = currencies[account.currency].symbol;

    return (
      <Wrapper mode={mode}>
        <SelectWrapper>
          <Select
            content={this.renderContent}
            isOpened={this.state.isSelectOpened}
            onClickOutside={this.onClickOutside}
            width={416}
          >
            {ref => (
              <RegularInput
                ref={ref}
                value={this.state.searchStr}
                onChangeText={this.onChangeSearch}
                onFocus={this.onOpenSelect}
              />
            )}
          </Select>
        </SelectWrapper>
        <ExchangeContentWrapper>
          <ExchangeInputWrapper asPlaceholder={value === '0'} fontSize={this.fontSize}>
            {inputValue && <Sign>{mode === BaseExchangeMode.FROM ? '-' : '+'}</Sign>}
            <Currency htmlFor={mode.toString()}>{currencySymbol}</Currency>
            <ExchangeInput
              id={mode.toString()}
              onChange={this.onChange}
              value={inputValue}
              placeholder={'0'}
              onFocus={this.onFocus}
              ref={this.handleExchangeInputRef}
              onKeyDown={this.onKeyDown}
              size={value.length}
            />
          </ExchangeInputWrapper>

          {baseAccount === account && (
            <CurrentRate>
              <RateTitle>{t('exchange.currentRate')}</RateTitle>
              <RateValue>{this.currentRate}</RateValue>
            </CurrentRate>
          )}
        </ExchangeContentWrapper>
      </Wrapper>
    );
  }
}

const translated = withTranslation();
const ConnectedBaseExchange = connect(mapStateToProps)(BaseExchange);

export default translated(ConnectedBaseExchange);
