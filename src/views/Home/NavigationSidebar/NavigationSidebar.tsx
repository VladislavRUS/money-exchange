import React from 'react';
import { Wrapper } from './NavigationSidebar.styles';
import { UserInformation } from './UserInformation';
import { Links } from './Links';
import { LanguageSelect } from './LanguageSelect';

const NavigationSidebar = () => (
  <Wrapper>
    <UserInformation />
    <Links />
    <LanguageSelect />
  </Wrapper>
);

export default NavigationSidebar;
