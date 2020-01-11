import styled, { css } from 'styled-components';
import { BaseButtonMode } from '../BaseButton/BaseButton';

export const Text = styled.div<{ mode?: BaseButtonMode }>`
  font-size: 14px;

  ${props =>
    props.mode === BaseButtonMode.SUCCESS &&
    css`
      color: #fff;
    `}
`;
