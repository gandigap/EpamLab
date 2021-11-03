import React, { useCallback } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/mixinsAndVars';
import { useActions } from '../../../hooks/useActions';
import { hoverShadowStyle } from '../../../styles/mixinsAndVars';
import { useTypedSelector } from '../../../hooks/useTypeSelectors';
import { AlbumProps } from '../../../types/albumsTypes';
import { useHistory } from 'react-router-dom';

const AlbumContainer = styled.div`
  width 24%;
  min-width:200px;
  min-height: 200px;  
  margin: 5px;
  background-color: ${colors.fifthСolor};  
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid ${colors.thirdColor};
  overflow: hidden;

  &:hover{
    ${hoverShadowStyle}
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

const Album = ({ albumInfo }: AlbumProps) => {
  const { photosList } = useTypedSelector(state => state.photos);
  const { fetchPhotos, setCurrentAlbumId } = useActions();
  const history = useHistory();

  const setViewStatePhotoListToContent = useCallback(
    () => {
      if (photosList[albumInfo.id] === undefined) {
        fetchPhotos(albumInfo.id);
      }
      setCurrentAlbumId(albumInfo.id);
      history.push(`/albums/${albumInfo.id}`);
    },
    [albumInfo.id, fetchPhotos, history, photosList, setCurrentAlbumId],
  )

  return (
    <AlbumContainer id={`${albumInfo.id}`} onClick={setViewStatePhotoListToContent} >
      <AlbumContainerTitle >{albumInfo.title}</AlbumContainerTitle>
    </AlbumContainer>
  );
}

export default Album;

