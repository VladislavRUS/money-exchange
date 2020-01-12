import React from 'react';
import TetherComponent from 'react-tether';

interface IDropdownProps {
  isOpened: boolean;
  children: (ref: React.RefObject<HTMLElement>) => React.ReactNode;
  content: (ref: React.RefObject<HTMLElement>) => React.ReactNode;
  onClickOutside?: () => void;
  attachment?: string;
}

class Dropdown extends React.Component<IDropdownProps> {
  ref: React.RefObject<HTMLElement> | null = null;

  componentDidUpdate(): void {
    if (this.props.isOpened) {
      document.addEventListener('click', this.handleClick);
    } else {
      document.removeEventListener('click', this.handleClick);
    }
  }

  handleClick = (event: MouseEvent) => {
    if (this.ref && this.ref.current && this.ref.current.contains(event.target as any)) {
      return;
    }

    if (this.props.onClickOutside) {
      this.props.onClickOutside();
    }
  };

  renderElement = (ref: any) => {
    if (!this.props.isOpened) {
      return null;
    }

    this.ref = ref;
    return this.props.content(ref);
  };

  render() {
    const { attachment = 'top center', children } = this.props;

    return <TetherComponent attachment={attachment} renderTarget={children} renderElement={this.renderElement} />;
  }
}

export default Dropdown;
