import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import AlbumsList from './albums/AlbumsList';
import PhotosList from './photos/PhotosList';
import ContentContext from './ContentContext';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Button from '../button/Button';
import { _contentTypes, _modalTypes } from '../../constants/constants';
import Modal from '../modal/Modal';
import ModalOverlay from '../modal/ModalOverlay';
import FormAlbum from '../modal/FormAlbum';
import FormPhoto from '../modal/FormPhoto';

const ContentContainer = styled.div`
  grid-area: content;  
  font-size: 18px;
  padding:20px;  
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Content = () => {
  const [viewStateContent, setViewStateContent] = useState(_contentTypes.albums);
  const [isModalOpen, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState(_modalTypes.albumModal);
  const value = {
    viewStateContent, setViewStateContent,
    isModalOpen, setShowModal,
    typeModal, setTypeModal
  };
  const topRef = useRef<null | HTMLButtonElement>(null);
  const bottomRef = useRef<null | HTMLButtonElement>(null);
  const scrollContent = useCallback(
    (view) => () => {
      if (bottomRef && bottomRef.current && topRef && topRef.current) {
        view === 'top'
          ? topRef.current.scrollIntoView({ behavior: "smooth" })
          : bottomRef.current.scrollIntoView({ behavior: "smooth" })
      }
    },
    [],
  )

  const changeStateModal = useCallback(
    (e) => {
      e.target.id === 'modal__overlay' && setShowModal(!isModalOpen);
    },
    [isModalOpen]
  );

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement;
    body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  if (value.isModalOpen)
    return (
      <ContentContext.Provider value={value}>
        <Modal >
          <ModalOverlay
            onClickHandler={changeStateModal}
            renderSection={() => {
              switch (value.typeModal) {
                case _modalTypes.albumModal:
                  return <FormAlbum />
                case _modalTypes.photoModal:
                  return <FormPhoto />
              }
              return <FormAlbum />
            }} />
        </Modal>
      </ContentContext.Provider>
    );

  return (
    <ErrorBoundary >
      <ContentContext.Provider value={value}>
        <ContentContainer>
          <Button onClickHandler={scrollContent('bottom')}
            ref={topRef}
            renderSection={() => {
              return (
                <div className='button-icon-container'>
                  <span className='button-icon-container__icon'>▼</span>
                </div>
              )
            }} />
          {value.viewStateContent === 'photos' ? <PhotosList /> : <AlbumsList />}
          <Button onClickHandler={scrollContent('top')}
            ref={bottomRef}
            renderSection={() => {
              return (
                <div className='button-icon-container'>
                  <span className='button-icon-container__icon'>▲</span>
                </div>
              )
            }} />
        </ContentContainer>
      </ContentContext.Provider>
    </ErrorBoundary>
  );
};

export default Content;