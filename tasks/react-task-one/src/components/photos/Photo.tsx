import React from 'react';
import styled from 'styled-components';
import { PhotoProps } from './PhotoInterfaces';
import { colors } from '../../styles/mixinsAndVars';

const PhotoImg = styled.img`
  margin: 5px;
  width: 150px;
  height:150px;
  cursor: pointer;

  &:hover{
    box-shadow: 5px 5px 2px 0px ${colors.secondColor};
    -webkit-box-shadow: 5px 5px 2px 0px ${colors.secondColor};
    -moz-box-shadow: 5px 5px 2px 0px ${colors.secondColor};
  }
`;


function Photo({ photoInfo }: PhotoProps) {
  return (
    <PhotoImg src={`${photoInfo.url}`} alt="Logo">
    </PhotoImg>
  );
}

export default Photo;