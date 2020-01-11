import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  width: 208px;
  justify-content: space-between;
`;

export const Hint = styled.div`
  margin-top: 16px;
  text-align: center;
  color: rgb(206, 213, 219);
  font-size: 12px;
  transition: color 0.2s ease;
`;

export const Action = styled.div`
  display: flex;
  flex-direction: column;

  &:hover {
    ${Hint} {
      color: #000;
    }
  }
`;
