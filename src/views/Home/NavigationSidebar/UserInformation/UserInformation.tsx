import React from 'react';
import { Wrapper, Avatar, FullName, Company, Demo } from './UserInformation.styles';
import { IApplicationState } from '../../../../store';
import { connect } from 'react-redux';
import { withTranslation, WithTranslation } from 'react-i18next';

const mapStateToProps = (state: IApplicationState) => ({
  user: state.user.current,
  isDemo: state.user.isDemo,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

type TProps = TStateProps & WithTranslation;

const UserInformation: React.FC<TProps> = ({ user, isDemo, t }) => (
  <Wrapper>
    <Avatar avatarUrl={user.avatarUrl} />
    <FullName>{user.firstName + ' ' + user.lastName}</FullName>
    <Company>{user.company}</Company>
    {isDemo && <Demo>{t('app.demoAccount')}</Demo>}
  </Wrapper>
);

const translated = withTranslation();
const ConnectedUserInformation = connect(mapStateToProps)(UserInformation);

export default translated(ConnectedUserInformation);
