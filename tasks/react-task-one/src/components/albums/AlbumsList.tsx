import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypeSelectors';
import Album from './Album';
import { useActions } from '../../hooks/useActions';
import styled from 'styled-components';

const AlbumsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const AlbumsList: React.FC = (props: any) => {
  const { albumsList, error, loading } = useTypedSelector(state => state.albums);
  const { fetchAlbums, addAlbum } = useActions();

  /* useEffect(() => {
    if (albumsList.length === 0 && !loading) {
      fetchAlbums();
    }
  }, [fetchAlbums, albumsList, loading]); */
  useEffect(() => {
    if (Object.keys(albumsList).length === 0 && !loading) {
      fetchAlbums();
    }
  }, [fetchAlbums, albumsList, loading]);

  if (loading) {
    return <h1> Идет загрузка</h1>
  }

  if (error) {
    return <h1> Произошла ошибка</h1>
  }

  const addAlbumHandler = () => {
    const newObject: any = {};
    const ind = Object.keys(albumsList).length + 1;
    newObject[ind] = { userId: 1, id: ind, title: 'default' }
    addAlbum(newObject)
  }

  return (
    <>
      <AlbumsListContainer>
        {Object.keys(albumsList).map((key: any) => {

          return <Album albumInfo={albumsList[key]} key={albumsList[key].id} />
        })}
      </AlbumsListContainer>
      <button onClick={addAlbumHandler}>Add album</button>
    </>
  )
}

export default AlbumsList;

