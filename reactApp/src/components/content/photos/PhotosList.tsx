import React, { useCallback, useContext } from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelectors';
import Photo from './Photo';
import styled from 'styled-components';
import Spinner from '../../spinner/Spinner';
import { useActions } from '../../../hooks/useActions';
import { PhotoInfoConfig } from '../../../types/photosTypes';
import Button from '../../button/Button';
import ContentContext from '../ContentContext';
import Modal from '../../modal/Modal';
import ModalOverlay from '../../modal/ModalOverlay';

const PhotosListContainer = styled.div`
  display: flex; 
  flex-wrap: wrap;
  justify-content: center;  
`;

const PhotosList = () => {
  const { photosList, error, loading, albumID } = useTypedSelector(state => state.photos);
  const { addPhoto } = useActions();
  const value = useContext(ContentContext);
  const changeStateModal = useCallback(
    () => {
      value.setShowModal(!value.isModalOpen)
    },
    [value]
  );
  const setViewStateAlbumListToContent = useCallback(
    () => value.setViewState('albums'),
    [value]
  );
  const onClickButtonAddPhoto = useCallback(
    () => {
      const ind = Object.keys(photosList[albumID]).length + 1;
      const newObject: PhotoInfoConfig = {
        albumId: 2,
        id: ind,
        title: "non sunt voluptatem placeat consequuntur rem incidunt",
        url: "https://via.placeholder.com/600/8e973b",
        thumbnailUrl: "https://via.placeholder.com/150/8e973b"
      };
      addPhoto(newObject);
    }, [addPhoto, photosList, albumID],
  )

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <h1> Произошла ошибка</h1>
  }

  return (
    <div>
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
        onClickHandler={onClickButtonAddPhoto}
        renderSection={() => <p className='button-text'>Add photo</p>} />
      <Button
        onClickHandler={changeStateModal}
        renderSection={() => <p className='button-text'>Open modal</p>} />
      {value.isModalOpen ? <Modal ><ModalOverlay >
        I'm a modal!{" "}
        <button
          style={{ background: "papyawhip" }}
          onClick={() => value.setShowModal(false)}
        >
          close
        </button>
      </ModalOverlay></Modal> : null}
    </div>
  )
}

export default PhotosList;
