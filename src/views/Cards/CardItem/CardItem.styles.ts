import styled from 'styled-components';
import mastercardIcon from '../../../assets/icons/mc_symbol.svg';

export const Wrapper = styled.div`
  padding: 25px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 5px 15px -2px rgba(0, 0, 0, 0.15);

  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 3px 15px -2px rgba(0, 0, 0, 0.3);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const Spent = styled.div`
  color: rgb(139, 149, 158);
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 117, 235, 0.2);
  min-width: 60px;
`;

export const Avatar = styled.div<{ imageUrl: string }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  margin-left: auto;
`;

export const Owner = styled.div`
  font-size: 28px;
  margin-bottom: 15px;
  color: rgb(25, 28, 31);
`;

export const CardInformation = styled.div`
  display: flex;
  align-items: center;
`;

export const Symbol = styled.div`
  margin-right: 10px;
  width: 19px;
  height: 12px;
  background-image: url(${mastercardIcon});
  background-size: contain;
`;

export const Number = styled.div`
  color: rgb(139, 149, 158);
`;
