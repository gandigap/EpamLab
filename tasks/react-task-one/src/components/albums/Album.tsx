import React from 'react';
import styled from 'styled-components';
import { AlbumProps } from './AlbumInterfaces';
import { colors } from '../../styles/mixinsAndVars';

const AlbumContainer = styled.div`
  width 24%;
  min-width:200px;
  min-height: 200px;  
  margin: 5px;
  background-color: ${colors.fifthСolor};  
  color: #000;  
  cursor: pointer;

  &:hover{
    box-shadow: 5px 5px 2px 0px ${colors.secondColor};
    -webkit-box-shadow: 5px 5px 2px 0px ${colors.secondColor};
    -moz-box-shadow: 5px 5px 2px 0px ${colors.secondColor};
  }
`;

const AlbumContainerTitle = styled.h3`
  padding: 5px;
  height: 36px;
  overflow: hidden;
  font-size: 22px;  
  color: ${colors.firstColor};
  background-color: ${colors.thirdColor};
`;

const Album = ({ albumInfo, handler }: AlbumProps) => {
  return (
    <AlbumContainer id={`${albumInfo.id}`} onClick={() => handler(`photos ${albumInfo.id}`)}>
      <AlbumContainerTitle >{albumInfo.title}</AlbumContainerTitle>
    </AlbumContainer>
  );
}

export default Album;