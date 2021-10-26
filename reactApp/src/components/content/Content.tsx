import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import AlbumsList from './albums/AlbumsList';
import PhotosList from './photos/PhotosList';
import ContentContext from './ContentContext';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Button from '../button/Button';
import { _typesContent, _typesModal } from '../../constants/constants';
import Modal from '../modal/Modal';
import ModalOverlay from '../modal/ModalOverlay';

const ContentContainer = styled.div`
  grid-area: content;  
  font-size: 18px;
  padding:20px;  
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Content = () => {
  const [viewState, setViewState] = useState(_typesContent.albums);
  const [isModalOpen, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState(_typesModal.albumModal);
  const value = {
    viewState,
    setViewState,
    isModalOpen,
    setShowModal,
    typeModal,
    setTypeModal
  }
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
          <ModalOverlay onClickHandler={changeStateModal} />
        </Modal>
      </ContentContext.Provider>

    );

  return (
    <ErrorBoundary >
      <ContentContext.Provider value={value}>
        <ContentContainer>
          <Button onClickHandler={scrollContent('bottom')}
            ref={topRef}
            renderSection={() => <p className='button-icon-container'><span className='button-icon-container__icon'>▼</span></p>} />
          {value.viewState === 'photos' ? <PhotosList /> : <AlbumsList />}
          <Button onClickHandler={scrollContent('top')}
            ref={bottomRef}
            renderSection={() => <p className='button-icon-container'><span className='button-icon-container__icon'>▲</span></p>} />
        </ContentContainer>
      </ContentContext.Provider>
    </ErrorBoundary>
  );
};

export default Content;