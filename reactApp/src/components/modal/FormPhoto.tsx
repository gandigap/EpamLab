import React, { useContext, useCallback, useRef } from 'react';
import Button from '../button/Button';
import ContentContext from '../content/ContentContext';
import { ModalFormContainer, ModalHeader, ModalInput, ModalInputContainer, ModalLabel, ModalTitle } from './FormElements';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypeSelectors';
import { PhotoInfoConfig } from '../../types/photosTypes';

const FormPhoto = () => {
  const { albumsList } = useTypedSelector(state => state.albums);
  const value = useContext(ContentContext);
  const inputTitle = useRef<HTMLInputElement>(null);
  const inputUserId = useRef<HTMLInputElement>(null);
  const { addPhoto } = useActions();
  const changeStateModal = useCallback(
    () => {
      value.setShowModal(!value.isModalOpen);
    },
    [value]
  );
  const addNewPhoto = useCallback(
    () => {

      if (inputTitle && inputTitle.current && inputUserId && inputUserId.current) {
        const ind = Object.keys(albumsList).length + 1;
        const newObject: PhotoInfoConfig = {
          albumId: 2,
          id: ind,
          title: "non sunt voluptatem placeat consequuntur rem incidunt",
          url: "https://via.placeholder.com/600/8e973b",
          thumbnailUrl: "https://via.placeholder.com/150/8e973b"
          /* userId: +inputUserId.current.value,
          id: ind,
          title: inputTitle.current.value */
        }
        addPhoto(newObject);
        changeStateModal();
      }
    },
    [addPhoto, albumsList, changeStateModal],
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
        <ModalLabel>Title photo:</ModalLabel><ModalInput ref={inputTitle} defaultValue='' />
      </ModalInputContainer>
      <ModalInputContainer>
        <ModalLabel>UserId:</ModalLabel><ModalInput ref={inputUserId} defaultValue='' />
      </ModalInputContainer>
      <Button
        onClickHandler={addNewPhoto}
        renderSection={() => <p className='button-text'>Submit</p>} />
    </ModalFormContainer>
  );
}

export default FormPhoto;