import React, { useEffect, useCallback, useContext } from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelectors';
import Album from './Album';
import { useActions } from '../../../hooks/useActions';
import styled from 'styled-components';
import Button from '../../common/button/Button';
import Spinner from '../../common/spinner/Spinner';
import { _buttonText, _errorMessage, _modalTypes } from '../../../constants/constants'
import { WrapperButton } from '../../common/button/WrapperButton';
import ModalContext from '../../modal/ModalContext';
import ScrollWrapper from '../../common/scrollWrapper/ScrollWrapper';
import { useParams } from 'react-router-dom';
import ErrorBoundary from '../../errorBoundary/ErrorBoundary';

const AlbumsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const AlbumsList = () => {
  const { userId } = useParams<{ userId?: string }>();
  const { albumsList, error, loading } = useTypedSelector(state => state.albums);
  const { fetchAlbums } = useActions();
  const value = useContext(ModalContext);
  const openModalForAddAlbum = useCallback(
    () => {
      value.setTypeModal(_modalTypes.albumModal);
      value.setShowModal(!value.isModalOpen);
    },
    [value]
  );

  const getAllAlbums = useCallback(
    () => {
      return userId
        ? Object.keys(albumsList)
          .filter((key: string) => {
            return albumsList[`${key}`].userId === parseInt(userId, 10)
          })
          .map((key: string) => {
            return <Album
              albumInfo={albumsList[`${key}`]}
              key={albumsList[`${key}`].id} />
          })
        : Object.keys(albumsList).map((key: string) => {
          return <Album
            albumInfo={albumsList[`${key}`]}
            key={albumsList[`${key}`].id} />
        })
    },
    [albumsList, userId]
  );
  const addButtonContent = useCallback(
    (value) => () => <p className='button-text'>{`${value}`}</p>,
    []
  );

  useEffect(() => {
    if (Object.keys(albumsList).length === 0 && !loading) {
      fetchAlbums();
    }
  }, [fetchAlbums, albumsList, loading]);



  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <h1>{_errorMessage.errorAlbumsFetch}</h1>
  }

  return (
    <ErrorBoundary>
      <ScrollWrapper>
        <AlbumsListContainer>
          {getAllAlbums()}
        </AlbumsListContainer>
        <WrapperButton>
          <Button
            onClickHandler={openModalForAddAlbum}
            renderSection={addButtonContent(_buttonText.addAlbum)} />
        </WrapperButton>
      </ScrollWrapper>
    </ErrorBoundary>

  )
}

export default AlbumsList;

