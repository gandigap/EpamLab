import React, { useState } from 'react';
import styled from 'styled-components';

import AlbumsList from './albums/AlbumsList';
import PhotosList from './photos/PhotosList';
import ContentContext from './ContentContext';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';

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

  return (
    <ErrorBoundary >
      <ContentContext.Provider value={valueContentContext}>
        <ContentContainer>
          {valueContentContext.viewStateContent === _contentTypes.photos 
          ? <PhotosList /> : <AlbumsList />}
        </ContentContainer>
      </ContentContext.Provider>
    </ErrorBoundary>
  );
};

export default Content;