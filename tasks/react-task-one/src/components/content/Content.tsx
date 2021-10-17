import React from 'react';
import styled from 'styled-components';
import { buttonStyle } from '../../styles/mixinsAndVars';
import AlbumsList from '../albums/AlbumsList';
import PhotosList from '../photos/PhotosList';
import { useTypedSelector } from '../../hooks/useTypeSelectors';
import { useActions } from '../../hooks/useActions';

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
  const { viewState } = useTypedSelector(state => state.content);
  const { setAlbumsListViewState } = useActions();
  console.log('content')
  return (
    <ContentContainer>
      {viewState === 'photos' ?
        <>
          <PhotosList />
          <ButtonBack onClick={() => setAlbumsListViewState()}>Back</ButtonBack>
        </>
        : <AlbumsList />}

    </ContentContainer>
  );
};

export default Content;