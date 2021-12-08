import React from 'react';
import AlbumsList from '../components/content/albums/AlbumsList';
import Avatar from '../components/userDetails/Avatar';
import UserDetailContainer from '../components/userDetails/UserDetailContainer';
import UserInfo from '../components/userDetails/UserInfo';

const PrivateUserAlbums = () => {
  return (
    <>
      <UserDetailContainer >
        <Avatar />
        <UserInfo />
      </UserDetailContainer>
      <AlbumsList />
    </>
  );
};

export default PrivateUserAlbums;