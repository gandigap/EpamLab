import React, { useEffect, useCallback } from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelectors';
import Album from './Album';
import { useActions } from '../../../hooks/useActions';
import styled from 'styled-components';
import { buttonStyle } from '../../../styles/mixinsAndVars';
import Spinner from '../../spinner/Spinner';
import { AlbumsData } from '../../../types/albumsTypes';

const AlbumsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Button = styled.button`
  ${buttonStyle}
`;

const AlbumsList = () => {
  const { albumsList, error, loading } = useTypedSelector(state => state.albums);
  const { fetchAlbums, addAlbum } = useActions();

  const onClickButtonAddAlbum = useCallback(
    () => {
      const newObject: { [key: number]: AlbumsData } = {};
      const ind = Object.keys(albumsList).length + 1;
      newObject[ind] = { userId: 1, id: ind, title: 'default' }
      addAlbum(newObject)
    },
    [addAlbum, albumsList],
  )

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
        {Object.keys(albumsList).map((key: any) => {
          return <Album
            albumInfo={albumsList[key]}
            key={albumsList[key].id} />
        })}
      </AlbumsListContainer>
      <Button onClick={onClickButtonAddAlbum}>Add album</Button>
    </>
  )
}

export default AlbumsList;

