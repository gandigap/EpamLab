import React, { useContext, useCallback, useRef } from 'react';
import Button from '../button/Button';
import ContentContext from '../content/ContentContext';
import { ModalFormContainer, ModalHeader, ModalInput, ModalInputContainer, ModalLabel, ModalTitle } from './FormElements';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypeSelectors';
import { AlbumListConfig } from '../../types/albumsTypes';

const FormAlbum = () => {
  const { albumsList } = useTypedSelector(state => state.albums);
  const value = useContext(ContentContext);
  const inputTitle = useRef<HTMLInputElement>(null);
  const inputUserId = useRef<HTMLInputElement>(null);
  const { addAlbum } = useActions();

  const createNewAlbum = useCallback(
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

      addAlbum(newObject)
    },
    [addAlbum, albumsList],
  )

  const changeStateModal = useCallback(
    () => {
      value.setShowModal(!value.isModalOpen);
    },
    [value]
  );

  const getValueInput = useCallback(
    () => {
      if (inputTitle && inputTitle.current) {
        console.log(inputTitle.current.value);
      }
    },
    []
  );

  return (
    <ModalFormContainer>
      <ModalHeader>
        <ModalTitle>Please, enter data album</ModalTitle>
        <Button
          onClickHandler={changeStateModal}
          renderSection={() => <span className='button-close-modal'>X</span>} />
      </ModalHeader>
      <ModalInputContainer>
        <ModalLabel>Title album:</ModalLabel><ModalInput ref={inputTitle} defaultValue='' />
      </ModalInputContainer>
      <ModalInputContainer>
        <ModalLabel>UserId:</ModalLabel><ModalInput ref={inputUserId} defaultValue='' />
      </ModalInputContainer>
      <Button
        onClickHandler={createNewAlbum}
        renderSection={() => <p className='button-text'>Submit</p>} />
    </ModalFormContainer>
  );
}

export default FormAlbum;