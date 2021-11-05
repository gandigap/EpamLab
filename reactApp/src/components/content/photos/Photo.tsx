import React from 'react';
import styled from 'styled-components';
import { PhotoProps } from '../../../types/photosTypes';
import { hoverShadowStyle } from '../../../styles/mixinsAndVars';

const PhotoImg = styled.img`
  margin: 5px;
  width: 150px;
  height:150px;
  cursor: pointer;

  &:hover{
    ${hoverShadowStyle}
  }
`;

const Photo = ({ photoInfo }: PhotoProps) => {
  return (
    <PhotoImg src={`${photoInfo.url}`} alt="Logo" />
  );
}

export default Photo;