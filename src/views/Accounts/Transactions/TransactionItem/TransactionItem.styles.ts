import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.2);
  }

  & + & {
    margin-top: 10px;
  }
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #eceff1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
`;

export const Description = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Key = styled.div`
  color: rgb(25, 28, 31);
`;

const Value = styled.div`
  color: rgb(139, 149, 158);
`;

export const Title = styled(Key)`
  margin-bottom: 8px;
`;

export const Details = styled.div`
  font-size: 13px;
`;

export const Time = styled(Value)``;

export const Sum = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: auto;
`;

export const Minus = styled(Key)`
  margin-bottom: 8px;
`;

export const Plus = styled(Value)``;
