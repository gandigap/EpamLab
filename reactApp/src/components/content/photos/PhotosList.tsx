import React, { useCallback, useContext } from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelectors';
import Photo from './Photo';
import styled from 'styled-components';
import Spinner from '../../spinner/Spinner';
import { PhotoInfoConfig } from '../../../types/photosTypes';
import Button from '../../button/Button';
import ContentContext from '../ContentContext';
import { _buttonText, _contentTypes, _modalTypes } from '../../../constants/constants';

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
      value.setTypeModal(_modalTypes.photoModal);
      value.setShowModal(!value.isModalOpen);
    },
    [value]
  );
  const setViewStateAlbumListToContent = useCallback(
    () => value.setViewStateContent(_contentTypes.albums),
    [value]
  );

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <h1> Произошла ошибка</h1>
  }

  return (
    <>
      <Button
        onClickHandler={setViewStateAlbumListToContent}
        renderSection={() => <p className='button-text'>{_buttonText.back}</p>} />
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
        renderSection={() => <p className='button-text'>{_buttonText.addPhoto}</p>} />
    </>
  )
}

export default PhotosList;
