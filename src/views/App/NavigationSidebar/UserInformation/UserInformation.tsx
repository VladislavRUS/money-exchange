import React from 'react';
import { Wrapper, Avatar, FullName, Company, Demo } from './UserInformation.styles';
import { IApplicationState } from '../../../../store';
import { connect } from 'react-redux';

const mapStateToProps = (state: IApplicationState) => ({
  user: state.user.current,
  isDemo: state.user.isDemo,
});

type TStateProps = ReturnType<typeof mapStateToProps>;

type TProps = TStateProps;

const UserInformation: React.FC<TProps> = ({ user, isDemo }) => (
  <Wrapper>
    <Avatar avatarUrl={user.avatarUrl} />
    <FullName>{user.firstName + ' ' + user.lastName}</FullName>
    <Company>{user.company}</Company>
    {isDemo && <Demo>Demo account</Demo>}
  </Wrapper>
);

const ConnectedUserInformation = connect(mapStateToProps)(UserInformation);

export default ConnectedUserInformation;
