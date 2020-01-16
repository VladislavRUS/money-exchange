import React from 'react';
import { Overlay, Content, ContentWrapper, CloseIconWrapper } from './Modal.styles';
import { FiX } from 'react-icons/fi';

interface IModalProps {
  isOpened: boolean;
  onRequestClose?: () => void;
  externalContent?: () => React.ReactNode;
}

class Modal extends React.Component<IModalProps> {
  render() {
    const { isOpened, onRequestClose, children, externalContent } = this.props;

    return (
      isOpened && (
        <Overlay>
          <ContentWrapper>
            <CloseIconWrapper onClick={onRequestClose}>
              <FiX size={24} />
            </CloseIconWrapper>
            <Content>{children}</Content>
          </ContentWrapper>
          {externalContent && externalContent()}
        </Overlay>
      )
    );
  }
}

export default Modal;
