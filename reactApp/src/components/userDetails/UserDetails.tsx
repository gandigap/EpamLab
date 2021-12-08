import React from 'react';
import Avatar from './Avatar';
import UserInfo from './UserInfo';
import Content from '../content/Content';
import UserDetailContainer from './UserDetailContainer';

const UserDetails = () => {
  return (
    <>
      <UserDetailContainer >
        <Avatar />
        <UserInfo />
      </UserDetailContainer>
      <Content />
    </>
  );
};

export default UserDetails;
