import React from 'react';
import { Wrapper } from './NavigationSidebar.styles';
import { UserInformation } from './UserInformation';
import { Links } from './Links';

const NavigationSidebar = () => (
  <Wrapper>
    <UserInformation />
    <Links />
  </Wrapper>
);

export default NavigationSidebar;
