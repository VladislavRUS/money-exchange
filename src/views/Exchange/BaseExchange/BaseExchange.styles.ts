import styled, { css } from 'styled-components';
import { BaseExchangeMode } from './BaseExchange';

export const Wrapper = styled.div<{ mode: BaseExchangeMode }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;

  ${props =>
    props.mode === BaseExchangeMode.TO &&
    css`
      background-color: #f7f7f7;
    `}
`;

export const SelectWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  max-width: 416px;
`;

export const ExchangeContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Sign = styled.div`
  margin-right: 5px;
`;

export const Currency = styled.label.attrs({ htmlFor: 'exchange-input' })`
  display: block;
  padding-right: 5px;
  cursor: text;
`;

export const ExchangeInput = styled.input.attrs({ id: 'exchange-input' })`
  display: inline-block;
  flex-shrink: 1;
  border: none;
  font-size: inherit;
  font-weight: inherit;
  background-color: transparent;

  &::placeholder {
    color: #ced5db;
  }
`;

export const ExchangeInputWrapper = styled.div<{ asPlaceholder: boolean; fontSize: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.fontSize}rem;
  font-weight: 300;

  ${props =>
    props.asPlaceholder &&
    css`
      ${Sign}, ${Currency} {
        color: #ced5db;
      }
    `}
`;
