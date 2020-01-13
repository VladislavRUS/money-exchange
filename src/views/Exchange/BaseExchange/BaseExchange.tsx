import React from 'react';
import { Wrapper, SelectWrapper, BigInput } from './BaseExchange.styles';
import { IAccount } from '../../../store/accounts/types';
import { RegularInput } from '../../../components/RegularInput';
import { Select } from '../../../components/Select';
import { IApplicationState } from '../../../store';
import { connect } from 'react-redux';
import { i18n } from '../../../i18n';

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
  onSelectAccount: (account: IAccount) => void;
  onSetBaseAccount: (account: IAccount) => void;
}

const mapStateToProps = (state: IApplicationState) => ({
  accounts: state.accounts.list,
  baseAccount: state.exchange.baseAccount,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

type TProps = TStateProps & IBaseExchangeProps;

type TState = {
  isSelectOpened: boolean;
  searchStr: string;
  changedSearch: boolean;
};

class BaseExchange extends React.Component<TProps, TState> {
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
      this.onReset();
    }
  }

  getFormattedValue(value: number) {
    return new Intl.NumberFormat(i18n.language, {
      useGrouping: true,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value);
  }

  getTitleFromAccount = (account: IAccount) => account.currency + ' ' + account.title;

  onOpenSelect = () => {
    this.setState({ isSelectOpened: true });
  };

  onReset = () => {
    this.setState({
      isSelectOpened: false,
      searchStr: this.getTitleFromAccount(this.props.account),
      changedSearch: false,
    });
  };

  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value || '0';

    if (!/^[0-9.,]+$/.test(value)) {
      return;
    }

    const parsedValue = parseFloat(value.replace(/,/g, ''));

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
              this.props.onSelectAccount(account);
            }}
            key={account.id}
          />
        ))}
      </React.Fragment>
    );
  };

  onFocus = () => {
    this.props.onSetBaseAccount(this.props.account);
  };

  render() {
    const { value, mode = BaseExchangeMode.FROM } = this.props;

    const formattedValue = value ? this.getFormattedValue(value) : '';

    return (
      <Wrapper mode={mode}>
        <SelectWrapper>
          <Select
            content={this.renderContent}
            isOpened={this.state.isSelectOpened}
            onClickOutside={this.onReset}
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
        <BigInput onChange={this.onChange} placeholder={'0'} value={formattedValue} onFocus={this.onFocus} />
      </Wrapper>
    );
  }
}

const ConnectedBaseExchange = connect(mapStateToProps)(BaseExchange);

export default ConnectedBaseExchange;
