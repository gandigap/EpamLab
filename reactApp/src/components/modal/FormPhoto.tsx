import React, { useContext, useCallback, useRef, useState, useEffect } from 'react';
import Button from '../common/button/Button';
import {
  ModalContentContainer, ModalHeader, ModalInput,
  ModalInputContainer, ModalInputListContainer, ModalLabel,
  ModalTitle, ModalWrapperButton
} from './FormElements';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypeSelectors';
import { PhotoInfoConfig } from '../../types/photosTypes';
import { _buttonText, _errorMessage, _modalLabel, _modalTitle } from '../../constants/constants';
import ModalContext from './ModalContext';

const FormPhoto = () => {
  const { photosList, albumID } = useTypedSelector(state => state.photos);
  const [titlePhotoInfo, setTitlePhotoInfo] = useState({
    titleValue: '', titleError: false
  });
  const value = useContext(ModalContext);
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
        const lengthPhotolist = Object.keys(photosList[albumID]).length;
        let indexLastPhotoInCurrentAlbum = 0;
        let photoId = 1;
        if (lengthPhotolist !== 0) {
          indexLastPhotoInCurrentAlbum = lengthPhotolist - 1;
          photoId = photosList[albumID][indexLastPhotoInCurrentAlbum].id + 1;
        }
        const color = inputColor.current.value.replace('#', '');
        const newObject: PhotoInfoConfig = {
          albumId: albumID,
          id: photoId,
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

  const addTitle = useCallback(
    () => {
      if (inputTitle && inputTitle.current) {
        const valueInputTitle = inputTitle.current.value;
        valueInputTitle.match(/^[\da-zA-Z ]{1,30}$/)
          ? setTitlePhotoInfo({ titleValue: inputTitle.current.value, titleError: false })
          : setTitlePhotoInfo({ titleValue: inputTitle.current.value, titleError: true });
      }
    }, []
  )

  const addButtonContent = useCallback(
    (value) => () => <p className='button-text'>{`${value}`}</p>,
    []
  );

  const addButtonIconClose = useCallback(
    () => <span className='button-close-modal'>✖</span>,
    []
  );

  useEffect(() => {
    addTitle();
    return () => {
      addTitle();
    }
  }, [addTitle])

  return (
    <ModalContentContainer>
      <ModalHeader>
        <ModalTitle>{_modalTitle.photo}</ModalTitle>
        <Button
          onClickHandler={changeStateModal}
          renderSection={addButtonIconClose} />
      </ModalHeader>
      <ModalInputListContainer>
        <ModalInputContainer>
          <ModalLabel>{_modalLabel.photoTitle}</ModalLabel>
          <ModalInput ref={inputTitle} type='text' defaultValue=''
            onChange={addTitle} placeholder='Ex: Exclusive photo' />
          {titlePhotoInfo.titleError ? <p style={{ color: 'red' }}>{_errorMessage.errorModalTitle}</p> : null}
        </ModalInputContainer>
        <ModalInputContainer>
          <ModalLabel>{_modalLabel.color}</ModalLabel>
          <ModalInput ref={inputColor} type='color' defaultValue='#999999' />
        </ModalInputContainer>
      </ModalInputListContainer>
      <ModalWrapperButton>
        <Button
          onClickHandler={changeStateModal}
          renderSection={addButtonContent(_buttonText.close)} />
        <Button
          onClickHandler={addNewPhoto} disabled={titlePhotoInfo.titleError ? true : false}
          renderSection={addButtonContent(_buttonText.submit)} />
      </ModalWrapperButton>
    </ModalContentContainer>
  );
}

export default FormPhoto;