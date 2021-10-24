import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from '../button/Button';
import AlbumsList from './albums/AlbumsList';
import PhotosList from './photos/PhotosList';
import ContentContext from './ContentContext';

const ContentContainer = styled.div`
  grid-area: content;  
  font-size: 18px;
  padding:20px;  
  text-align: center;
`;

const Content = () => {

  const [viewState, setViewState] = useState('albums');
  const setViewStateAlbumListToContent = useCallback(
    () => setViewState('albums'),
    [setViewState]
  );

  const value = {
    setViewState,
  }

  return (
    <ContentContext.Provider value={value}>
      <ContentContainer>
        {viewState === 'photos' ?
          <>
            <Button onClickHandler={setViewStateAlbumListToContent}>Back</Button>
            <PhotosList />
          </>
          : <AlbumsList />}
      </ContentContainer>
    </ContentContext.Provider>

  );
};

export default Content;