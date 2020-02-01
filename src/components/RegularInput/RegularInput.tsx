import React from 'react';
import { Wrapper, Placeholder, StyledInput, BottomLine } from './RegularInput.styles';

interface IRegularInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  forwardRef?: any;
  onFocus?: () => void;
  dataTestId?: string;
}

type TState = {
  isFocused: boolean;
};

class RegularInput extends React.Component<IRegularInputProps, TState> {
  constructor(props: IRegularInputProps) {
    super(props);

    this.state = {
      isFocused: false,
    };
  }

  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.props.onChangeText(event.currentTarget.value);
  };

  onFocus = () => {
    this.setState({ isFocused: true });
    this.props.onFocus && this.props.onFocus();
  };

  onBlur = () => {
    this.setState({ isFocused: false });
  };

  render() {
    const { value, placeholder = '', icon = null, forwardRef, dataTestId } = this.props;

    return (
      <Wrapper ref={forwardRef}>
        <StyledInput
          value={value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          data-test-id={dataTestId}
        />
        {icon}
        {placeholder && <Placeholder isFocused={this.state.isFocused || Boolean(value)}>{placeholder}</Placeholder>}
        <BottomLine isFocused={this.state.isFocused} />
      </Wrapper>
    );
  }
}

const WithForwardRef = React.forwardRef((props: IRegularInputProps, ref?: any) => (
  <RegularInput {...props} forwardRef={ref} />
));

export default WithForwardRef;
