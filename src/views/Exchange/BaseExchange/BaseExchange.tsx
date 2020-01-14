import React from 'react';
import { Wrapper, SelectWrapper, ExchangeInput } from './BaseExchange.styles';
import { IAccount } from '../../../store/accounts/types';
import { RegularInput } from '../../../components/RegularInput';
import { Select } from '../../../components/Select';
import { IApplicationState } from '../../../store';
import { connect } from 'react-redux';

export enum BaseExchangeMode {
  FROM,
  TO,
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
});

type TStateProps = ReturnType<typeof mapStateToProps>;

type TProps = TStateProps & IBaseExchangeProps;

type TState = {
  isSelectOpened: boolean;
  searchStr: string;
  changedSearch: boolean;
};

class BaseExchange extends React.Component<TProps, TState> {
  caretStart: number | null = null;
  caretEnd: number | null = null;
  exchangeInputRef: any;

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

    if (prevProps.value !== this.props.value && this.exchangeInputRef && this.caretStart && this.caretEnd) {
      this.exchangeInputRef.setSelectionRange(this.caretStart, this.caretEnd);
    }
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

    this.caretStart = event.currentTarget.selectionStart;
    this.caretEnd = event.currentTarget.selectionEnd;

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

  handleExchangeInputtRef = (element: any) => {
    this.exchangeInputRef = element;
  };

  onFocus = () => {
    this.props.onSetBaseAccount(this.props.account);
  };

  render() {
    const { value, mode = BaseExchangeMode.FROM } = this.props;

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
        <ExchangeInput
          onChange={this.onChange}
          placeholder={'0'}
          value={value}
          onFocus={this.onFocus}
          ref={this.handleExchangeInputtRef}
        />
      </Wrapper>
    );
  }
}

const ConnectedBaseExchange = connect(mapStateToProps)(BaseExchange);

export default ConnectedBaseExchange;
