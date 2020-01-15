import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }    

    100% {
        opacity: 1;
    }
`;

const slideIn = keyframes`
    0% {
        transform: translateY(10%);
    }    

    100% {
        transform: translateY(0);
    }
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.25s ease;
`;

export const Content = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 6px;
  animation: ${slideIn} 0.25s ease;
  width: 400px;
`;

export const CloseIconWrapper = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  right: -30px;
  top: -30px;
  cursor: pointer;
`;
