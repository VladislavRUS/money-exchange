import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(25%);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div<{ width: number }>`
  margin-top: 8px;
  width: ${props => props.width}px;
  background-color: #fff;
  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.3);
  animation: ${slideIn} 0.2s ease;
  border-radius: 6px;
`;
