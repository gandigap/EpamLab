import React, { useContext, useCallback, useRef } from 'react';
import Button from '../button/Button';
import ContentContext from '../content/ContentContext';
import { ModalContentContainer, ModalHeader, ModalInput, ModalInputListContainer, ModalInputContainer, ModalLabel, ModalTitle, ModalWrapperButton } from './FormElements';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypeSelectors';
import { AlbumListConfig } from '../../types/albumsTypes';
import { _buttonText, _modalLabel, _modalTitle } from '../../constants/constants';

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
    <ModalContentContainer>
      <ModalHeader>
        <ModalTitle>{_modalTitle.album}</ModalTitle>
        <Button
          onClickHandler={changeStateModal}
          renderSection={() => <span className='button-close-modal'>X</span>} />
      </ModalHeader>
      <ModalInputListContainer>
        <ModalInputContainer>
          <ModalLabel>{_modalLabel.albumTitle}</ModalLabel>
          <ModalInput ref={inputTitle} type='text' defaultValue='' placeholder='Ex: Exclusive album' />
        </ModalInputContainer>
        <ModalInputContainer>
          <ModalLabel>{_modalLabel.userId}</ModalLabel>
          <ModalInput ref={inputUserId} type='number' defaultValue='' />
        </ModalInputContainer>
      </ModalInputListContainer>
      <ModalWrapperButton>
        <Button
          onClickHandler={changeStateModal}
          renderSection={() => <p className='button-text'>{_buttonText.close}</p>} />
        <Button
          onClickHandler={addNewAlbum}
          renderSection={() => <p className='button-text'>{_buttonText.submit}</p>} />
      </ModalWrapperButton>
    </ModalContentContainer>
  );
}

export default FormAlbum;