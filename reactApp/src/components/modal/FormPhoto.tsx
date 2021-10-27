import React, { useContext, useCallback, useRef } from 'react';
import Button from '../button/Button';
import ContentContext from '../content/ContentContext';
import { ModalFormContainer, ModalHeader, ModalInput, ModalInputContainer, ModalLabel, ModalTitle, ModalWrapperButton } from './FormElements';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypeSelectors';
import { PhotoInfoConfig } from '../../types/photosTypes';

const FormPhoto = () => {
  const { photosList, albumID } = useTypedSelector(state => state.photos);
  const value = useContext(ContentContext);
  const inputTitle = useRef<HTMLInputElement>(null);
  const inputColor = useRef<HTMLInputElement>(null);
  const { addPhoto } = useActions();
  const changeStateModal = useCallback(
    () => {
      value.setShowModal(!value.isModalOpen);
    },
    [value]
  );
  const addNewPhoto = useCallback(
    () => {
      if (inputTitle && inputTitle.current && inputColor && inputColor.current) {
        const indexLastPhotoInCurrentAlbum = Object.keys(photosList[albumID]).length - 1;
        const color = inputColor.current.value.replace('#', '');
        const newObject: PhotoInfoConfig = {
          albumId: albumID,
          id: photosList[albumID][indexLastPhotoInCurrentAlbum].id + 1,
          title: inputTitle.current.value,
          url: `https://via.placeholder.com/600/${color}`,
          thumbnailUrl: `https://via.placeholder.com/150/${color}`
        }
        addPhoto(newObject);
        changeStateModal();
      }
    },
    [addPhoto, changeStateModal, albumID, photosList],
  )

  return (
    <ModalFormContainer>
      <ModalHeader>
        <ModalTitle>Please, enter data photo</ModalTitle>
        <Button
          onClickHandler={changeStateModal}
          renderSection={() => <span className='button-close-modal'>X</span>} />
      </ModalHeader>
      <ModalInputContainer>
        <ModalLabel>Title photo:</ModalLabel>
        <ModalInput ref={inputTitle} defaultValue='' placeholder='Ex: Exclusive' />
      </ModalInputContainer>
      <ModalInputContainer>
        <ModalLabel>Color:</ModalLabel>
        <ModalInput ref={inputColor} defaultValue='#fff' type='color' />
      </ModalInputContainer>
      <ModalWrapperButton>
        <Button
          onClickHandler={changeStateModal}
          renderSection={() => <p className='button-text'>Close</p>} />
        <Button
          onClickHandler={addNewPhoto}
          renderSection={() => <p className='button-text'>Submit</p>} />
      </ModalWrapperButton>
    </ModalFormContainer>
  );
}

export default FormPhoto;