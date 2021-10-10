import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Albums from '../albums/Albums';
import Photos from '../photos/Photos';
import { buttonStyle } from '../../styles/mixinsAndVars';
import ContentContext from './ContentContext';

const ContentContainer = styled.div`
  grid-area: content;  
  font-size: 18px;
  padding:20px 0;  
  text-align: center;
`;

const ButtonBack = styled.button`  
  ${buttonStyle};
`;

const Content = () => {
  const [viewState, setViewState] = useState('albums');
  const [albumId, setAlbumId] = useState('');
  const onClickCallback = useCallback(
    () => setViewState('albums'),
    [setViewState]
  );

  const value = {
    setViewState,
    setAlbumId,
  }

  return (
    <ContentContext.Provider value={value}>
      <ContentContainer>
        {
          viewState === 'albums' ?
            <Albums />
            :
            <>
              <ButtonBack onClick={onClickCallback}>Back</ButtonBack>
              <Photos idAlbum={`${albumId}`} />
            </>
        }
      </ContentContainer>
    </ContentContext.Provider>
  );
};

export default Content;