import React, { useState } from 'react';
import styled from 'styled-components';
import Albums from './albums/Albums';
import Photos from './photos/Photos';
import { buttonStyle } from '../styles/mixinsAndVars';

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
  const [viewState, setViewState] = useState('albums')

  return (
    <ContentContainer>
      {
        viewState === 'albums' ?
          <Albums changeView={setViewState} />
          :
          <>
            <ButtonBack data-albom={viewState} onClick={() => {
              setViewState('albums');
            }}>Back</ButtonBack>
            <Photos idAlbum={viewState.split(' ')[1]} />
          </>
      }
    </ContentContainer>
  );
};

export default Content;