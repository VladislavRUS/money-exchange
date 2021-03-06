import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 45px;
  padding-top: 9px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(206, 213, 219);
`;

export const Placeholder = styled.div<{ isFocused: boolean }>`
  top: 50%;
  position: absolute;
  color: #8b959e;
  font-size: 16px;
  transform: translateY(0px);
  transition: transform 0.2s ease;

  ${props =>
    props.isFocused &&
    css`
      transform: translate(-8px, -23px) scale(0.8);
    `}
`;

export const BottomLine = styled.div<{ isFocused: boolean }>`
  position: absolute;
  bottom: -1px;
  height: 2px;
  left: 0;
  width: 100%;
  transform: scaleX(0);
  background-color: rgb(0, 117, 235);
  transition: transform 0.2s ease;
  transform-origin: 0 50%;

  ${props =>
    props.isFocused &&
    css`
      transform: scale(1);
    `}
`;

export const StyledInput = styled.input`
  font-size: 16px;
  width: 100%;
  border: none;
  background-color: transparent;
`;
