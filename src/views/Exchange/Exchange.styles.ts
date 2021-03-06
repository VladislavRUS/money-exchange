import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
`;

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(#fff, transparent);
`;

export const Title = styled.h2`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #191c1e;
  font-size: 32px;
`;

export const ReverseButtonWrapper = styled.div`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
`;

export const CloseWrapper = styled.div`
  position: absolute;
  top: 25px;
  right: 50px;
`;

export const ContinueButtonWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  width: 350px;
`;

export const ScreenHolderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
