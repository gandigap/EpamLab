import React from 'react';
import styled from 'styled-components';

const AvatarContainer = styled.div`
  grid-area: avatar;  
`;

const ImageContainer = styled.img`
  max-width: 150px;  
  margin: 20px;
  border: 1px solid yellow;
`;

interface AvatarProps {
  avatarSrc: string
}

const Avatar: React.FC<AvatarProps> = ({ avatarSrc }) => {
  return (
    <AvatarContainer>
      <ImageContainer src={avatarSrc} alt="avatar image" />
    </AvatarContainer>
  );
};

export default Avatar;
