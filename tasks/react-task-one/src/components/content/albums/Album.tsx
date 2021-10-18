import React, { useCallback } from 'react';
import styled from 'styled-components';
import { colors } from '../../../styles/mixinsAndVars';
import { useActions } from '../../../hooks/useActions';
import { hoverShadow } from '../../../styles/mixinsAndVars';
import { useTypedSelector } from '../../../hooks/useTypeSelectors';
import { AlbumProps } from '../../../types/albumsTypes';

const AlbumContainer = styled.div`
  width 24%;
  min-width:200px;
  min-height: 200px;  
  margin: 5px;
  background-color: ${colors.fifthСolor};  
  color: #000;  
  cursor: pointer;
  border-radius: 20px;
  border: 1px solid ${colors.thirdColor};
  overflow: hidden;

  &:hover{
    ${hoverShadow}
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
  const { setPhotosListViewState, fetchPhotos, setAlbumId } = useActions();

  const onClickAlbum = useCallback(
    () => {
      if (photosList[albumInfo.id] === undefined) {
        fetchPhotos(albumInfo.id);
      }
      setPhotosListViewState();
      setAlbumId(albumInfo.id);
    },
    [photosList, albumInfo.id, setPhotosListViewState, setAlbumId, fetchPhotos],
  )

  return (
    <AlbumContainer id={`${albumInfo.id}`} onClick={onClickAlbum} >
      <AlbumContainerTitle >{albumInfo.title}</AlbumContainerTitle>
    </AlbumContainer>
  );
}

export default Album;

