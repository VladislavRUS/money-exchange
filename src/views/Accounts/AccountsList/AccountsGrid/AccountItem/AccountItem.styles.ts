import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 5px 15px -2px rgba(0, 0, 0, 0.15);
  padding: 20px 24px 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 3px 15px -2px rgba(0, 0, 0, 0.3);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 44px;
`;

export const Information = styled.div`
  font-size: 16px;
  line-height: 24px;
`;

export const Title = styled.div`
  color: rgb(25, 28, 31);
  margin-bottom: 4px;
`;

export const Currency = styled.div`
  color: rgb(139, 149, 158);
`;

export const Flag = styled.div<{ flagImage: string }>`
  margin-left: auto;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-image: url(${props => props.flagImage});
  background-size: cover;
`;

export const Value = styled.div`
  font-size: 28px;
  color: rgb(25, 28, 30);
`;
