import React, { useCallback, useContext } from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelectors';
import Photo from './Photo';
import styled from 'styled-components';
import Spinner from '../../common/spinner/Spinner';
import { PhotoInfoConfig } from '../../../types/photosTypes';
import Button from '../../common/button/Button';
import { _buttonText, _errorMessage, _modalTypes } from '../../../constants/constants';
import { WrapperButton } from '../../common/button/WrapperButton';
import ModalContext from '../../modal/ModalContext';
import ScrollWrapper from '../../common/scrollWrapper/ScrollWrapper';
import { useHistory } from 'react-router-dom';
import ErrorBoundary from '../../errorBoundary/ErrorBoundary';

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
  const history = useHistory();

  const { photosList, error, loading, albumID } = useTypedSelector(state => state.photos);

  const valueModal = useContext(ModalContext);

  const openModalForAddPhoto = useCallback(
    () => {
      valueModal.setTypeModal(_modalTypes.photoModal);
      valueModal.setShowModal(!valueModal.isModalOpen);
    },
    [valueModal]
  );
  const setViewStateAlbumListToContent = useCallback(
    () => history.goBack(),
    [history]
  );
  const addButtonContent = useCallback(
    (value) => () => <p className='button-text'>{`${value}`}</p>,
    []
  );

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <h1>{_errorMessage.errorPhotosFetch}</h1>
  }

  return (
    <ErrorBoundary>
      <ScrollWrapper>
        <WrapperButton>
          <Button
            onClickHandler={setViewStateAlbumListToContent}
            renderSection={addButtonContent(_buttonText.back)} />
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
            renderSection={addButtonContent(_buttonText.addPhoto)} />
        </WrapperButton>
      </ScrollWrapper>
    </ErrorBoundary>

  )
}

export default PhotosList;
