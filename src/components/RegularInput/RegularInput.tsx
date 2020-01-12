import React from 'react';
import { Wrapper, Placeholder, StyledInput, BottomLine } from './RegularInput.styles';

interface IRegularInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  forwardRef?: any;
  onFocus?: () => void;
}

class RegularInput extends React.Component<IRegularInputProps> {
  onChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.props.onChangeText(event.currentTarget.value);
  };

  render() {
    const { value, placeholder = '', icon = null, forwardRef, onFocus } = this.props;

    return (
      <Wrapper ref={forwardRef}>
        <StyledInput value={value} onChange={this.onChange} onFocus={onFocus} />
        {icon}
        {placeholder && <Placeholder hasValue={Boolean(value)}>{placeholder}</Placeholder>}
        <BottomLine />
      </Wrapper>
    );
  }
}

const WithForwardRef = React.forwardRef((props: IRegularInputProps, ref?: any) => (
  <RegularInput {...props} forwardRef={ref} />
));

export default WithForwardRef;
