import React from 'react';
import { Overlay, Content, CloseIconWrapper } from './Modal.styles';
import { FiX } from 'react-icons/fi';

interface IModalProps {
  isOpened: boolean;
  onRequestClose?: () => void;
}

class Modal extends React.Component<IModalProps> {
  render() {
    const { isOpened, onRequestClose, children } = this.props;

    return (
      isOpened && (
        <Overlay>
          <Content>
            <CloseIconWrapper onClick={onRequestClose}>
              <FiX size={24} />
            </CloseIconWrapper>
            {children}
          </Content>
        </Overlay>
      )
    );
  }
}

export default Modal;
