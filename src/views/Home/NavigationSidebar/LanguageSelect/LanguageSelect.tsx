import React from 'react';
import { Wrapper, CurrentLanguage } from './LanguageSelect.styles';
import { Select } from '../../../../components/Select';
import { i18n } from '../../../../i18n';

type TState = {
  isOpened: boolean;
};

class LanguageSelect extends React.Component<any, TState> {
  constructor(props: any) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }

  onOpenSelect = () => {
    this.setState({ isOpened: true });
  };

  onCloseSelect = () => {
    this.setState({ isOpened: false });
  };

  onLanguageSelect = (language: string) => {
    i18n.changeLanguage(language);
    this.onCloseSelect();
  };

  renderContent = () => {
    return (
      <React.Fragment>
        <Select.TextItem text={'Русский'} onClick={() => this.onLanguageSelect('ru')} />
        <Select.TextItem text={'English'} onClick={() => this.onLanguageSelect('en')} />
      </React.Fragment>
    );
  };

  render() {
    return (
      <Wrapper>
        <Select
          content={this.renderContent}
          isOpened={this.state.isOpened}
          onClickOutside={this.onCloseSelect}
          attachment={'bottom left'}
        >
          {ref => <CurrentLanguage ref={ref as any} onClick={this.onOpenSelect} language={i18n.language} />}
        </Select>
      </Wrapper>
    );
  }
}

export default LanguageSelect;
