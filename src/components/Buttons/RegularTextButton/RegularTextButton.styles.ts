import styled, { css } from 'styled-components';
import { BaseButtonLook } from '../BaseButton';

export const Text = styled.div<{ look?: BaseButtonLook }>`
  font-weight: 400;
  font-size: 16px;
  color: #000;

  ${props =>
    props.look === BaseButtonLook.SUCCESS &&
    css`
      color: #fff;
    `}
`;
