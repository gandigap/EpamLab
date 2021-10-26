import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import AlbumsList from './albums/AlbumsList';
import PhotosList from './photos/PhotosList';
import ContentContext from './ContentContext';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Button from '../button/Button';

const ContentContainer = styled.div`
  grid-area: content;  
  font-size: 18px;
  padding:20px;  
  text-align: center;
`;

const Content = () => {
  const [viewState, setViewState] = useState('albums');
  const [isModalOpen, setShowModal] = useState(false);
  const value = {
    viewState,
    setViewState,
    isModalOpen,
    setShowModal
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

  useEffect(() => {
    const body = document.querySelector('body') as HTMLElement;
    body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

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