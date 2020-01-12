import styled from 'styled-components';

export const StyledButton = styled.button`
  display: block;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Text = styled.div<{ color?: string }>`
  font-size: 16px;
  color: ${props => props.color || 'rgb(0, 117, 235)'};
`;
