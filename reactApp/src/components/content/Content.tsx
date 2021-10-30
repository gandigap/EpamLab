import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import AlbumsList from './albums/AlbumsList';
import PhotosList from './photos/PhotosList';
import ContentContext from './ContentContext';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Button from '../button/Button';
import { _contentTypes } from '../../constants/constants';

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
  const valueContentContext = { viewStateContent, setViewStateContent };
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
      <ContentContext.Provider value={valueContentContext}>
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
          {valueContentContext.viewStateContent === 'photos' ? <PhotosList /> : <AlbumsList />}
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