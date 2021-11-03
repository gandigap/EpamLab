import React from 'react';
import Avatar from '../components/userDetails/Avatar';
import UserInfo from '../components/userDetails/UserInfo';
import PhotosList from '../components/content/photos/PhotosList';
import UserDetailContainer from '../components/userDetails/UserDetailContainer';

const PrivateUserPhotos = () => {
  return (
    <>
      <UserDetailContainer >
        <Avatar />
        <UserInfo />
      </UserDetailContainer>
      <PhotosList />
    </>
  );
};

export default PrivateUserPhotos;