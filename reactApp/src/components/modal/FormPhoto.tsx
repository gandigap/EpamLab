import React, { useContext, useCallback, useRef } from 'react';
import Button from '../button/Button';
import ContentContext from '../content/ContentContext';
import { ModalContentContainer, ModalHeader, ModalInput, ModalInputContainer, ModalInputListContainer, ModalLabel, ModalTitle, ModalWrapperButton } from './FormElements';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypeSelectors';
import { PhotoInfoConfig } from '../../types/photosTypes';
import { _buttonText, _modalLabel, _modalTitle } from '../../constants/constants';

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
    <ModalContentContainer>
      <ModalHeader>
        <ModalTitle>{_modalTitle.photo}</ModalTitle>
        <Button
          onClickHandler={changeStateModal}
          renderSection={() => <span className='button-close-modal'>X</span>} />
      </ModalHeader>
      <ModalInputListContainer>
        <ModalInputContainer>
          <ModalLabel>{_modalLabel.photoTitle}</ModalLabel>
          <ModalInput ref={inputTitle} type='text' defaultValue='' placeholder='Ex: Exclusive photo' />
        </ModalInputContainer>
        <ModalInputContainer>
          <ModalLabel>{_modalLabel.color}</ModalLabel>
          <ModalInput ref={inputColor} type='color' defaultValue='#fff' />
        </ModalInputContainer>
      </ModalInputListContainer>
      <ModalWrapperButton>
        <Button
          onClickHandler={changeStateModal}
          renderSection={() => <p className='button-text'>{_buttonText.close}</p>} />
        <Button
          onClickHandler={addNewPhoto}
          renderSection={() => <p className='button-text'>{_buttonText.submit}</p>} />
      </ModalWrapperButton>
    </ModalContentContainer>
  );
}

export default FormPhoto;