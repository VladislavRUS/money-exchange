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
  elementRef: React.RefObject<HTMLElement> | null = null;
  targetRef: React.RefObject<HTMLElement> | null = null;

  componentDidUpdate(): void {
    if (this.props.isOpened) {
      document.addEventListener('click', this.handleClick);
    } else {
      document.removeEventListener('click', this.handleClick);
    }
  }

  handleClick = (event: MouseEvent) => {
    if (this.targetRef && this.targetRef.current && this.targetRef.current.contains(event.target as any)) {
      return;
    }

    if (this.elementRef && this.elementRef.current && this.elementRef.current.contains(event.target as any)) {
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

    this.elementRef = ref;
    return this.props.content(ref);
  };

  renderTarget = (ref: any) => {
    this.targetRef = ref;
    return this.props.children(ref);
  };

  render() {
    const { attachment = 'top center' } = this.props;

    return (
      <TetherComponent attachment={attachment} renderTarget={this.renderTarget} renderElement={this.renderElement} />
    );
  }
}

export default Dropdown;
