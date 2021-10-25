import React, { useEffect, useCallback } from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelectors';
import Album from './Album';
import { useActions } from '../../../hooks/useActions';
import styled from 'styled-components';
import Button from '../../button/Button';
import Spinner from '../../spinner/Spinner';
import { AlbumListConfig } from '../../../types/albumsTypes';

const AlbumsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const AlbumsList = () => {
  const { albumsList, error, loading } = useTypedSelector(state => state.albums);
  const { fetchAlbums, addAlbum } = useActions();
  const onClickButtonAddAlbum = useCallback(
    () => {
      const newObject: AlbumListConfig = {};
      const ind = Object.keys(albumsList).length + 1;
      newObject[`${ind}`] = { userId: 1, id: ind, title: 'default' }
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
        {Object.keys(albumsList).map((key: string) => {
          return <Album
            albumInfo={albumsList[`${key}`]}
            key={albumsList[`${key}`].id} />
        })}
      </AlbumsListContainer>
      <Button onClickHandler={onClickButtonAddAlbum}>Add album</Button>
    </>
  )
}

export default AlbumsList;

