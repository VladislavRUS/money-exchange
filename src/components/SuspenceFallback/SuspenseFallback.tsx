import React from 'react';
import { Wrapper } from './SuspenseFallback.styles';
import { FiRadio } from 'react-icons/fi';

const SuspenseFallback = () => (
  <Wrapper>
    <FiRadio size={32} color={'rgba(0, 0, 0, 0.3)'} />
  </Wrapper>
);

export default SuspenseFallback;
