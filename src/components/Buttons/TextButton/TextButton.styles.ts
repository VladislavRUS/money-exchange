import styled, { css } from 'styled-components';
import { BaseButtonLook } from '../BaseButton';

export const Text = styled.div<{ look?: BaseButtonLook }>`
  font-size: 14px;

  ${props =>
    props.look === BaseButtonLook.SUCCESS &&
    css`
      color: #fff;
    `}
`;
