import React, { useCallback, useContext } from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelectors';
import Photo from './Photo';
import styled from 'styled-components';
import Spinner from '../../spinner/Spinner';
import { PhotoInfoConfig } from '../../../types/photosTypes';
import Button from '../../button/Button';
import { _buttonText, _errorMessage, _modalTypes } from '../../../constants/constants';
import { WrapperButton } from '../../button/WrapperButton';
import ModalContext from '../../modal/ModalContext';
import ScrollWrapper from '../../scrollWrapper/ScrollWrapper';
import { useHistory } from 'react-router-dom';

const PhotosListContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;  
`;

const AlbumTitle = styled.h3`
  font-size:24px;
  font-weight: bold;
`;

const PhotosList = () => {

  console.log('photolist')
  const { photosList, error, loading, albumID } = useTypedSelector(state => state.photos);

  const valueModal = useContext(ModalContext);
  const openModalForAddPhoto = useCallback(
    () => {
      valueModal.setTypeModal(_modalTypes.photoModal);
      valueModal.setShowModal(!valueModal.isModalOpen);
    },
    [valueModal]
  );
  const history = useHistory();
  const setViewStateAlbumListToContent = useCallback(
    () => history.goBack(),
    [history]
  );

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <h1>{_errorMessage.errorPhotosFetch}</h1>
  }

  return (
    <ScrollWrapper>
      <WrapperButton>
        <Button
          onClickHandler={setViewStateAlbumListToContent}
          renderSection={() => <p className='button-text'>{_buttonText.back}</p>} />
        <AlbumTitle>Album {albumID}</AlbumTitle>
      </WrapperButton>
      <PhotosListContainer>
        {(photosList[albumID] !== undefined && photosList[albumID].length !== 0)
          ? photosList[albumID].map((photo: PhotoInfoConfig) => <Photo
            photoInfo={photo}
            key={photo.id} />)
          : ''}
      </PhotosListContainer>
      <WrapperButton>
        <Button
          onClickHandler={openModalForAddPhoto}
          renderSection={() => <p className='button-text'>{_buttonText.addPhoto}</p>} />
      </WrapperButton>
    </ScrollWrapper>
  )
}

export default PhotosList;
