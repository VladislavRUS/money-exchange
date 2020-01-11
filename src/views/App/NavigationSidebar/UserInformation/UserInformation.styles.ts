import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 32px;
`;

export const Avatar = styled.div<{ avatarUrl: string }>`
  margin-bottom: 19px;
  width: 64px;
  height: 64px;
  background-image: url(${props => props.avatarUrl});
  background-size: cover;
  border-radius: 50%;
`;

export const FullName = styled.div`
  font-size: 16px;
  color: #000;
  line-height: 1.5;
`;

export const Company = styled.div`
  font-size: 16px;
  color: rgb(139, 149, 158);
  line-height: 1.5;
`;

export const Demo = styled.div`
  display: inline-block;
  font-size: 10px;
  margin-top: 8px;
  background-color: rgb(206, 213, 219);
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  border-radius: 24px;
  padding: 4px 12px;
  line-height: 16px;
  letter-spacing: 1px;
`;
