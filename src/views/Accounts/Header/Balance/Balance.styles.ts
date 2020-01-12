import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Amount = styled.div`
  display: flex;
  align-items: center;
  font-size: 42px;
  margin-bottom: 16px;
`;

export const IntegerDigits = styled.div`
  color: #191c1e;
`;

export const FractionDigits = styled.div`
  color: #8b959e;
`;

export const BaseCurrency = styled.div`
  display: flex;
  align-items: center;
`;

export const Flag = styled.div<{ flagImage: string }>`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  border-radius: 50%;
  background-image: url(${props => props.flagImage});
  background-size: cover;
`;

export const BalanceIn = styled.div`
  font-size: 16px;
  color: #8b959e;
  margin-right: 4px;
`;
