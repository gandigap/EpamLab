import React, { useContext, useCallback, useRef, useState, useEffect } from 'react';
import Button from '../button/Button';
import ContentContext from '../content/ContentContext';
import {
  ModalContentContainer, ModalHeader, ModalInput,
  ModalInputListContainer, ModalInputContainer, ModalLabel,
  ModalTitle, ModalWrapperButton
} from './FormElements';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypeSelectors';
import { AlbumListConfig } from '../../types/albumsTypes';
import { _buttonText, _errorMessage, _modalLabel, _modalTitle } from '../../constants/constants';

const FormAlbum = () => {
  const { albumsList } = useTypedSelector(state => state.albums);
  const [titleAlbumInfo, setTitleAlbumInfo] = useState({
    titleValue: '', titleError: false
  });
  const [userIdAlbumInfo, setuserIdAlbum] = useState({
    userIdValue: 1, userIdError: false
  });
  const value = useContext(ContentContext);
  const inputTitle = useRef<HTMLInputElement>(null);
  const inputUserId = useRef<HTMLInputElement>(null);
  const { addAlbum } = useActions();
  const changeStateModal = useCallback(
    () => { value.setShowModal(!value.isModalOpen); }, [value]
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

  const addUserId = useCallback(
    () => {
      if (inputUserId && inputUserId.current) {
        const valueInputUserId = inputUserId.current.value;
        valueInputUserId.match(/^[\d]{1,4}$/)
          ? setuserIdAlbum({ userIdValue: parseInt(inputUserId.current.value, 10), userIdError: false })
          : setuserIdAlbum({ userIdValue: parseInt(inputUserId.current.value, 10), userIdError: true });
      }
    }, []
  )

  const addTitle = useCallback(
    () => {
      if (inputTitle && inputTitle.current) {
        const valueInputTitle = inputTitle.current.value;
        valueInputTitle.match(/^[\da-zA-Z ]{1,30}$/)
          ? setTitleAlbumInfo({ titleValue: inputTitle.current.value, titleError: false })
          : setTitleAlbumInfo({ titleValue: inputTitle.current.value, titleError: true });
      }
    }, []
  )

  useEffect(() => {
    addTitle();
    addUserId();
    return () => {
      addTitle();
      addUserId();
    }
  }, [addTitle, addUserId])

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
          <ModalInput ref={inputTitle} type='text' defaultValue=''
            placeholder='Ex: Exclusive album' onChange={addTitle} />
          {titleAlbumInfo.titleError ? <p style={{ color: 'red' }}>{_errorMessage.errorModalTitle}</p> : null}
        </ModalInputContainer>
        <ModalInputContainer>
          <ModalLabel>{_modalLabel.userId}</ModalLabel>
          <ModalInput ref={inputUserId} type='number' defaultValue=''
            placeholder='Ex: 15' onChange={addUserId} />
          {userIdAlbumInfo.userIdError ? <p style={{ color: 'red' }}>{_errorMessage.errorModalUserId}</p> : null}
        </ModalInputContainer>
      </ModalInputListContainer>
      <ModalWrapperButton>
        <Button
          onClickHandler={changeStateModal}
          renderSection={() => <p className='button-text'>{_buttonText.close}</p>} />
        <Button
          onClickHandler={addNewAlbum}
          disabled={(userIdAlbumInfo.userIdError || titleAlbumInfo.titleError) ? true : false}
          renderSection={() => <p className='button-text'>{_buttonText.submit}</p>} />
      </ModalWrapperButton>
    </ModalContentContainer>
  );
}

export default FormAlbum;