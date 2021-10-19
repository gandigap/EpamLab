import React, { useCallback } from 'react';
import styled from 'styled-components';
import { buttonStyle } from '../../styles/mixinsAndVars';
import AlbumsList from './albums/AlbumsList';
import PhotosList from './photos/PhotosList';
import { useTypedSelector } from '../../hooks/useTypeSelectors';
import { useActions } from '../../hooks/useActions';

const ContentContainer = styled.div`
  grid-area: content;  
  font-size: 18px;
  padding:20px;  
  text-align: center;
`;

const ButtonBack = styled.button`  
  ${buttonStyle};
`;

const Content = () => {
  const { viewState } = useTypedSelector(state => state.content);

  const { setAlbumsListViewState } = useActions();

  const onClickButtonBack = useCallback(
    () => {
      setAlbumsListViewState()
    },
    [setAlbumsListViewState],
  )

  return (
    <ContentContainer>
      {viewState === 'photos' ?
        <>
          <ButtonBack onClick={onClickButtonBack}>Back</ButtonBack>
          <PhotosList />
        </>
        : <AlbumsList />}

    </ContentContainer>
  );
};

export default Content;