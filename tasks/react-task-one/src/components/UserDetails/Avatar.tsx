import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/mixinsAndVars';

const AvatarContainer = styled.div`
  grid-area: avatar;  
  background-color: ${colors.thirdColor};
  text-align: center;
`;

const ImageContainer = styled.img`
  max-width: 100px;  
  margin: 20px;  
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
