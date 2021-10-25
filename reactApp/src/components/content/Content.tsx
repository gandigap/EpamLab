import React, { useState, useCallback, useRef } from 'react';
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
  const value = {
    viewState,
    setViewState,
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

  return (
    <ErrorBoundary >
      <ContentContext.Provider value={value}>
        <ContentContainer>
          <Button onClickHandler={scrollContent('bottom')} ref={topRef}>Scroll bottom</Button>
          {viewState === 'photos' ?
            <>
              <PhotosList />
            </>
            : <AlbumsList />}
          <Button onClickHandler={scrollContent('top')} ref={bottomRef}>Scroll top</Button>
        </ContentContainer>
      </ContentContext.Provider>
    </ErrorBoundary>

  );
};

export default Content;