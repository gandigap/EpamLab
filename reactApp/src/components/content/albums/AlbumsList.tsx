import React, { useEffect, useCallback, useContext } from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelectors';
import Album from './Album';
import { useActions } from '../../../hooks/useActions';
import styled from 'styled-components';
import Button from '../../button/Button';
import Spinner from '../../spinner/Spinner';
import { _buttonText, _errorMessage, _modalTypes } from '../../../constants/constants'
import { WrapperButton } from '../../button/WrapperButton';
import ModalContext from '../../modal/ModalContext';

const AlbumsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const AlbumsList = () => {
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
    <>
      <AlbumsListContainer>
        {Object.keys(albumsList).map((key: string) => {
          return <Album
            albumInfo={albumsList[`${key}`]}
            key={albumsList[`${key}`].id} />
        })}
      </AlbumsListContainer>
      <WrapperButton>
        <Button
          onClickHandler={openModalForAddAlbum}
          renderSection={() => <p className='button-text'>{_buttonText.addAlbum}</p>} />
      </WrapperButton>
    </>
  )
}

export default AlbumsList;

