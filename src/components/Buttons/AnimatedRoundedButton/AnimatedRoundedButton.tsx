import React from 'react';
import { BaseButton } from '../BaseButton';
import { ANIMATION_DURATION_MS, Wrapper } from './AnimatedRoundedButton.styles';

type TBaseButtonProps = React.ComponentProps<typeof BaseButton>;
type TState = {
  isAnimating: boolean;
};

class AnimatedRoundedButton extends React.Component<TBaseButtonProps, TState> {
  constructor(props: TBaseButtonProps) {
    super(props);

    this.state = {
      isAnimating: false,
    };
  }

  onClick = () => {
    if (this.state.isAnimating) {
      return;
    }

    const { onClick } = this.props;
    onClick();

    this.setState({ isAnimating: true }, () => {
      setTimeout(() => {
        this.setState({ isAnimating: false });
      }, ANIMATION_DURATION_MS);
    });
  };

  render() {
    const { children, ...props } = this.props;

    return (
      <Wrapper className={this.state.isAnimating ? 'animating' : ''}>
        <BaseButton {...props} onClick={this.onClick}>
          {children}
        </BaseButton>
      </Wrapper>
    );
  }
}

export default AnimatedRoundedButton;
