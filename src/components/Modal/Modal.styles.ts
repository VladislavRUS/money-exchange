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
        transform: translateY(30%);
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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(230, 230, 230, 0.8);
  animation: ${fadeIn} 0.25s ease;
  z-index: 1000;
  overflow-y: auto;
  padding: 150px 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  animation: ${slideIn} 0.25s ease;
`;

export const Content = styled.div`
  position: relative;
  width: 450px;
  background-color: #fff;
  overflow-y: hidden;
  border-radius: 20px;
  box-shadow: 0 0 10px -1px rgba(0, 0, 0, 0.2);
`;

export const CloseIconWrapper = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  right: -30px;
  top: -30px;
  cursor: pointer;
`;
