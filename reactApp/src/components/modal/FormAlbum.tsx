import React, { useContext, useCallback, useRef } from 'react';
import Button from '../button/Button';
import ContentContext from '../content/ContentContext';
import { ModalFormContainer, ModalHeader, ModalInput, ModalInputContainer, ModalLabel, ModalTitle, ModalWrapperButton } from './FormElements';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypeSelectors';
import { AlbumListConfig } from '../../types/albumsTypes';

const FormAlbum = () => {
  const { albumsList } = useTypedSelector(state => state.albums);
  const value = useContext(ContentContext);
  const inputTitle = useRef<HTMLInputElement>(null);
  const inputUserId = useRef<HTMLInputElement>(null);
  const { addAlbum } = useActions();
  const changeStateModal = useCallback(
    () => {
      value.setShowModal(!value.isModalOpen);
    },
    [value]
  );
  const addNewAlbum = useCallback(
    () => {
      const newObject: AlbumListConfig = {};
      if (inputTitle && inputTitle.current && inputUserId && inputUserId.current) {
        const ind = Object.keys(albumsList).length + 1;
        newObject[`${ind}`] = {
          userId: +inputUserId.current.value,
          id: ind,
          title: inputTitle.current.value
        }
      }
      addAlbum(newObject);
      changeStateModal();
    },
    [addAlbum, albumsList, changeStateModal],
  )

  return (
    <ModalFormContainer>
      <ModalHeader>
        <ModalTitle>Please, enter data album</ModalTitle>
        <Button
          onClickHandler={changeStateModal}
          renderSection={() => <span className='button-close-modal'>X</span>} />
      </ModalHeader>
      <ModalInputContainer>
        <ModalLabel>Title album:</ModalLabel>
        <ModalInput ref={inputTitle} defaultValue='' />
      </ModalInputContainer>
      <ModalInputContainer>
        <ModalLabel>UserId:</ModalLabel>
        <ModalInput ref={inputUserId} defaultValue='' />
      </ModalInputContainer>
      <ModalWrapperButton>
        <Button
          onClickHandler={changeStateModal}
          renderSection={() => <p className='button-text'>Close</p>} />
        <Button
          onClickHandler={addNewAlbum}
          renderSection={() => <p className='button-text'>Submit</p>} />
      </ModalWrapperButton>
    </ModalFormContainer>
  );
}

export default FormAlbum;