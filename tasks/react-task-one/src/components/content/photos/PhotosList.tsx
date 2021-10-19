import React, { useCallback } from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelectors';
import Photo from './Photo';
import styled from 'styled-components';
import Spinner from '../../spinner/Spinner';
import { buttonStyle } from '../../../styles/mixinsAndVars';
import { useActions } from '../../../hooks/useActions';

const PhotosListContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-around;  
`;

const Button = styled.button`
  ${buttonStyle}
`;

const PhotosList = () => {
  const { photosList, error, loading, albumID } = useTypedSelector(state => state.photos);
  const { addPhoto } = useActions();

  const onClickButtonAddPhoto = useCallback(
    () => {
      let newObject: any = {};
      const ind = Object.keys(photosList).length + 1;
      newObject = {
        albumId: 2,
        id: ind,
        title: "non sunt voluptatem placeat consequuntur rem incidunt",
        url: "https://via.placeholder.com/600/8e973b",
        thumbnailUrl: "https://via.placeholder.com/150/8e973b"
      }
      addPhoto(newObject);
    }, [addPhoto, photosList],
  )

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <h1> Произошла ошибка</h1>
  }

  return (
    <div>
      <div>Album {albumID}</div>
      <PhotosListContainer>
        {(photosList[albumID] !== undefined && photosList[albumID].length !== 0)
          ? photosList[albumID].map((photo: any) => <Photo photoInfo={photo} key={photo.id} />)
          : ''}
      </PhotosListContainer>
      <Button onClick={onClickButtonAddPhoto}>Add photo</Button>
    </div>
  )
}

export default PhotosList;