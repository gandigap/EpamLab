import React, { useCallback, useContext } from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelectors';
import Photo from './Photo';
import styled from 'styled-components';
import Spinner from '../../spinner/Spinner';
/* import { useActions } from '../../../hooks/useActions'; */
import { PhotoInfoConfig } from '../../../types/photosTypes';
import Button from '../../button/Button';
import ContentContext from '../ContentContext';
import { _typesModal } from '../../../constants/constants';

const PhotosListContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;  
`;

const PhotosList = () => {
  const { photosList, error, loading, albumID } = useTypedSelector(state => state.photos);
  const value = useContext(ContentContext);
  const openModalForAddPhoto = useCallback(
    () => {
      value.setTypeModal(_typesModal.photoModal);
      value.setShowModal(!value.isModalOpen);
    },
    [value]
  );
  const setViewStateAlbumListToContent = useCallback(
    () => value.setViewState('albums'),
    [value]
  );

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <h1> Произошла ошибка</h1>
  }
  console.log(value, 'photolist')

  return (
    <>
      <Button
        onClickHandler={setViewStateAlbumListToContent}
        renderSection={() => <p className='button-text'>Back</p>} />
      <div>Album {albumID}</div>
      <PhotosListContainer>
        {(photosList[albumID] !== undefined && photosList[albumID].length !== 0)
          ? photosList[albumID].map((photo: PhotoInfoConfig) => <Photo
            photoInfo={photo}
            key={photo.id} />)
          : ''}
      </PhotosListContainer>
      <Button
        onClickHandler={openModalForAddPhoto}
        renderSection={() => <p className='button-text'>Add photo</p>} />
    </>
  )
}

export default PhotosList;
