import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
  grid-area: avatar;  
  text-align: center;
  border-radius: 10px;
`;

const ImageContainer = styled.img`
  max-width: 100px;  
  margin: 20px;  
`;

const Avatar = () => {
  return (
    <AvatarContainer>
      <ImageContainer src={'/images/user.png'} alt="avatar image" />
    </AvatarContainer>
  );
};

export default Avatar;
