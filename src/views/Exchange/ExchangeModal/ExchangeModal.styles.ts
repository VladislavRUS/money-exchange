import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

export const ReverseButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 70px;
`;

export const Header = styled.div`
  flex-grow: 1;
  padding: 30px 40px;
  background-color: #fafafa;
`;

export const ReverseButton = styled.div``;

export const Information = styled.div``;

const InformationRow = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  border-top: 2px solid rgb(245, 245, 245);
`;

export const From = styled(InformationRow)``;
export const To = styled(InformationRow)``;
export const Total = styled(InformationRow)``;

export const Title = styled.div`
  font-weight: 500;
`;

export const Value = styled.div`
  margin-left: auto;
  font-weight: 500;
`;

export const FromValue = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 23px;
`;

export const ToValue = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 25px;
`;

export const Subtitle = styled.div`
  font-weight: 500;
  margin-bottom: 20px;
`;

export const CommentInputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const CornerIconWrapper = styled.div`
  position: relative;
  top: -7px;
  margin-right: 10px;
`;

export const ExchangeButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  width: 350px;
`;

export const TotalWrapper = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: #000;
  display: flex;
  align-items: center;
`;

export const Amount = styled.div`
  margin-right: 15px;
  opacity: 0.9;
`;

export const Rate = styled.div`
  opacity: 0.6;
`;
