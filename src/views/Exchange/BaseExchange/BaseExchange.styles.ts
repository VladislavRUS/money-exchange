import styled, { css } from 'styled-components';
import { BaseExchangeMode } from './BaseExchange';

export const Wrapper = styled.div<{ mode: BaseExchangeMode }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 150px;

  ${props =>
    props.mode === BaseExchangeMode.TO &&
    css`
      background-color: #f7f7f7;
    `}
`;

export const SelectWrapper = styled.div`
  margin-top: 10px;
  max-width: 416px;
  border: 1px solid black;
`;

export const BigInput = styled.input`
  font-size: 48px;
`;
