import styled, { keyframes } from 'styled-components';

export const ANIMATION_DURATION_MS = 350;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  
  100% {
    transform: rotate(180deg);
  }
`;

export const Wrapper = styled.div`
  width: 56px;
  border-radius: 50%;
  box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.15);

  &:hover {
    opacity: 0.8;
  }

  &.animating {
    animation: ${rotationAnimation} ${ANIMATION_DURATION_MS}ms ease;
  }
`;
