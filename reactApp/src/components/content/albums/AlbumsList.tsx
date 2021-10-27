import React, { useEffect, useCallback, useContext } from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelectors';
import Album from './Album';
import { useActions } from '../../../hooks/useActions';
import styled from 'styled-components';
import Button from '../../button/Button';
import Spinner from '../../spinner/Spinner';
import ContentContext from '../ContentContext';
import { _typesModal } from '../../../constants/constants'

const AlbumsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const AlbumsList = () => {
  const { albumsList, error, loading } = useTypedSelector(state => state.albums);
  const { fetchAlbums } = useActions();
  const value = useContext(ContentContext);
  const openModalForAddAlbum = useCallback(
    () => {
      value.setTypeModal(_typesModal.albumModal);
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
    return <h1> Произошла ошибка</h1>
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
      <div className='button__wrapper' style={{ alignSelf: 'center' }}>
        <Button
          onClickHandler={openModalForAddAlbum}
          renderSection={() => <p className='button-text'>Add album</p>} />
      </div>
    </>
  )
}

export default AlbumsList;

